export function bindQuiz(root) {
  root.querySelectorAll("[data-quiz]").forEach((block) => {
    const answer = block.getAttribute("data-answer");
    const feedback = block.querySelector(".feedback");
    block.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        block.querySelectorAll("button").forEach((b) => b.removeAttribute("data-state"));
        if (id === answer) {
          btn.setAttribute("data-state", "right");
          feedback.textContent = block.getAttribute("data-ok") || "Correct.";
        } else {
          btn.setAttribute("data-state", "wrong");
          feedback.textContent = block.getAttribute("data-no") || "Not that.";
        }
      });
    });
  });
}
