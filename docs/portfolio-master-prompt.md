# Prompt Maestro: Portafolio de Ingeniería de Frontend & Producto

## 1. Visión General del Proyecto

Este proyecto es un portafolio personal construido con un enfoque de **Diseño Invisible (Invisible Design)** y **Artesanía Técnica**. El objetivo no es impresionar con animaciones complejas, sino con una simplicidad radical, una jerarquía tipográfica impecable, una estructura de componentes limpia y una honestidad brutal sobre cómo se resuelve código y producto bajo presión en entornos de startups.

### Filosofía de Desarrollo: Rebanado Vertical (Slice-Based)

- **No se trabaja en horizontal:** Está estrictamente prohibido crear "todos los layouts", "todos los componentes" o "todos los colores" a la vez.
- **Enfoque Vertical:** Cada funcionalidad, sección o vista se desarrolla de arriba a abajo en formato _issue_. Se define su token mínimo, su estructura, su componente Base UI y su estilo Tailwind, dejándolo completamente funcional y visible en el navegador antes de pasar a lo siguiente.

---

## 2. Stack Tecnológico Base (Últimas Versiones)

- **Framework:** Next.js (App Router, Server/Client Components según necesidad).
- **Biblioteca de Componentes:** Base UI (unstyled, accesibilidad nativa).
- **Motor de Estilos:** Tailwind CSS.
- **Estética de Referencia:** Inspirado en la limpieza técnica de la landing de **OpenCode** (estructuras de rejilla delimitadas por bordes finos, fondos planos oscuros) y la honestidad minimalista de la web de **Takuya Matsuyama** (directo, tipo diario de bitácora).

---

## 3. Principios de Diseño y Tokens Base (ADN Visual)

- **Color de Fondo:** Oscuro profundo plano (ej. `bg-black` o `bg-zinc-950`), sin degradados complejos ni brillos artificiales.
- **Estructura de Rejilla:** Secciones delimitadas visualmente mediante bordes muy finos y sutiles (ej. `border-zinc-850` o `border-zinc-900`) emulando la interfaz de documentación técnica de Base UI u OpenCode.
- **Tipografía:** Contraste radical de pesos y tamaños.
- _Sans-Serif Principal (Geist o Inter):_ Para titulares masivos y textos de lectura.
- _Monospace (Geist Mono o similar):_ Para metadatos, etiquetas de estado, fechas y fragmentos de código.

- **Espaciado:** Consistente y amplio, permitiendo que el contenido respire ("Invisible Design").

---

## 4. Estrategia de Contenido: El Enfoque de Producto

El portafolio se lee como un **Cuaderno de Bitácora Técnico**. Los proyectos no se muestran como casos de estudio de diseño tradicionales, sino como resolución de problemas reales:

- **Contexto de Startup:** Explicar el caos, la velocidad de entrega y las decisiones pragmáticas (ej. por qué se eligió una arquitectura monolítica simple para salir a producción en 4 días).
- **Artefactos Reales:** Integración de capturas de pantalla de la interfaz, bloques de código clave, esquemas de Base UI y notas sobre la toma de decisiones.

---

## 5. Mapa de Ruta de Ejecución (Issues Verticales)

Para iniciar el desarrollo, se ejecutará estrictamente en el siguiente orden, iterando issue por issue:

- **Issue #1 [Fundamentos Visuales y Contenedor]:** Configuración de `tailwind.config.js` (escala tipográfica Sans/Mono, paleta de grises técnicos) y creación del Layout Base con la rejilla de líneas finas divisoria.
- **Issue #2 [Header / Bio Slice]:** Creación de la sección Hero basada en el texto tipográfico de Takuya Matsuyama y OpenCode. Un componente ultra-limpio con la presentación del perfil.
- **Issue #3 [Contenedor de Proyectos / Grid]:** Diseño del componente de lista/rejilla para los proyectos, estructurado como una vista técnica estilo "Docs" de Base UI.
- **Issue #4 [Anatomía del Caso de Estudio]:** Estructuración vertical de la página de detalle o sección expandible de un proyecto (Texto de problema a la izquierda, código/capturas a la derecha).
