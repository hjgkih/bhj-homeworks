const modalActive = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const modalClose = document.querySelectorAll(".modal__close_times");
const modalShowSuccess = document.querySelector(".show-success");

modalActive.className += " modal_active";

modalShowSuccess.onclick = () => {
  modalActive.className = "modal";
  modalSuccess.className += " modal_active";
}

modalClose.forEach((i) => {
  i.onclick = () => {
    i.closest(".modal").className = "modal";
  };
});

  







