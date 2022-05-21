const btn_1 = document.querySelector(".card__share-btn");
const btn_2 = document.querySelector(".card__share-btn--active");

const content_2 = document.querySelector(".card__social-share");


const showContent = () => {
  content_2.classList.remove("hidden");
}

const hideContent = () => {
  content_2.classList.add("hidden");
}

btn_1.addEventListener("click", showContent);
btn_2.addEventListener("click", hideContent);
