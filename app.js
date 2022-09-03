// variablies
const intros = document.querySelectorAll(".bar");
intros.forEach((intro) => {
  intro.addEventListener("animationend", () => {
    intro.style.display = "none";
  });
});
