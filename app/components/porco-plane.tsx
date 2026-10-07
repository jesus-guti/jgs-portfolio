"use client";

// Quiet About signature. Model credit: pending.

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

type PorcoPlaneProps = {
  className?: string;
};

const INTRO_MS = 400;

function easeOutCirc(x: number) {
  return Math.sqrt(1 - (x - 1) ** 4);
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function PorcoPlane({ className }: PorcoPlaneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduced = prefersReducedMotion();
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.01, 500);
    camera.position.set(4, 1.6, 6);

    scene.add(new THREE.AmbientLight(0xffffff, 1.4));
    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(3, 4, 2);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xc8d4e8, 0.8);
    fill.position.set(-2, 1, -2);
    scene.add(fill);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = false;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = false;
    controls.enableRotate = !reduced;

    let requestId = 0;
    let disposed = false;
    let orbitRadius = 6;
    const lookAt = new THREE.Vector3(0, 0, 0);
    let introStart = 0;
    let settled = reduced;

    const placeCamera = (progress: number) => {
      const spin = easeOutCirc(progress) * Math.PI * 0.55;
      camera.position.x = lookAt.x + Math.sin(spin) * orbitRadius;
      camera.position.z = lookAt.z + Math.cos(spin) * orbitRadius;
      camera.position.y = lookAt.y + orbitRadius * 0.28;
      camera.lookAt(lookAt);
    };

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;
      renderer.setSize(width, height, false);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      if (settled) renderer.render(scene, camera);
    };

    const animate = (now: number) => {
      if (disposed) return;
      if (!introStart) introStart = now;
      const elapsed = now - introStart;
      if (elapsed < INTRO_MS) {
        placeCamera(elapsed / INTRO_MS);
        renderer.render(scene, camera);
        requestId = requestAnimationFrame(animate);
        return;
      }
      placeCamera(1);
      controls.update();
      renderer.render(scene, camera);
      settled = true;
    };

    resize();
    renderer.render(scene, camera);
    const observer = new ResizeObserver(resize);
    observer.observe(container);

    const onControlsChange = () => {
      if (!settled || disposed) return;
      renderer.render(scene, camera);
    };
    controls.addEventListener("change", onControlsChange);

    const loader = new GLTFLoader();
    loader.load(
      "/porco_rosso_plane.glb",
      (gltf) => {
        if (disposed) return;
        const model = gltf.scene;
        model.updateMatrixWorld(true);
        const box = new THREE.Box3().setFromObject(model);
        const sphere = box.getBoundingSphere(new THREE.Sphere());
        const fit =
          sphere.radius /
          Math.sin(THREE.MathUtils.degToRad(camera.fov / 2));
        orbitRadius = fit * 0.32;
        lookAt.copy(sphere.center);
        lookAt.y += sphere.radius * 0.08;
        camera.near = Math.max(orbitRadius / 100, 0.01);
        camera.far = orbitRadius * 20;
        camera.updateProjectionMatrix();
        controls.target.copy(lookAt);
        controls.minDistance = orbitRadius;
        controls.maxDistance = orbitRadius;
        scene.add(model);

        if (reduced) {
          camera.position.set(
            lookAt.x + orbitRadius * 0.35,
            lookAt.y + orbitRadius * 0.28,
            lookAt.z + orbitRadius,
          );
          camera.lookAt(lookAt);
          settled = true;
          renderer.render(scene, camera);
          return;
        }

        introStart = 0;
        requestId = requestAnimationFrame(animate);
      },
      undefined,
      () => {
        if (!disposed) setFailed(true);
      },
    );

    return () => {
      disposed = true;
      cancelAnimationFrame(requestId);
      observer.disconnect();
      controls.removeEventListener("change", onControlsChange);
      controls.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className={className}>
      <div
        ref={containerRef}
        aria-hidden={!failed}
        className="h-full w-full overflow-hidden"
      />
      {failed ? (
        <p className="mt-2 text-center font-mono text-caption text-text-weak">
          Plane model unavailable
        </p>
      ) : null}
    </div>
  );
}
