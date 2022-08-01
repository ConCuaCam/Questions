
const questions = document.querySelectorAll(".answer");

questions.forEach(function (answer) {
  const btn = answer.querySelector(".icon");

  btn.addEventListener("click", function () {

    questions.forEach(function (item) {
      if (item !== answer) {
        item.classList.remove("active");
      }
    });

    accordion-item-answer.classList.toggle("active");
  });
});