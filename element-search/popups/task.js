const modalActive = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const modalClose = document.querySelector(".modal__close_times");
const modalShowSuccess = document.querySelector(".show-success");

modalActive.className += " modal_active";

modalClose.onclick = () => {
  modalActive.className = "modal";
}

modalShowSuccess.onclick = () => {
  modalActive.className = "modal";
  modalSuccess.className += " modal_active";
}

