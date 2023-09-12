const selfie = document.querySelector(".selfie");
const spoiler = document.querySelector(".spoiler");

const changeSelfie = () => {
  if (spoiler.hidden === true) return;
  selfie.style.transition = "all 300ms ease";
  selfie.style.filter = "blur(0px)";
  selfie.style.opacity = "1";
  spoiler.hidden = true;
};

selfie.addEventListener("click", () => {
  changeSelfie();
});
