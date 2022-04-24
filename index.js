const portfolioBtn = document.querySelector(".all-btn");
const graphicDesignBtn = document.querySelector(".graphic-design-btn");
const webDevBtn = document.querySelector(".web-development-btn");
const uiUxBtn = document.querySelector(".ui-ux-btn");

graphicDesignBtn.addEventListener("click", () => {
  const graphicDesignItems = document.querySelectorAll(".graphic-design");
  graphicDesignBtn.classList.toggle("orange__text");
  graphicDesignItems.forEach((item) => {
    item.classList.toggle("active");
  });
});

webDevBtn.addEventListener("click", () => {
  const webDevItems = document.querySelectorAll(".web-development");
  webDevBtn.classList.toggle("orange__text");
  webDevItems.forEach((item) => {
    item.classList.toggle("active");
  });
});

uiUxBtn.addEventListener("click", () => {
  const uiUxItems = document.querySelectorAll(".ui-ux");
  uiUxBtn.classList.toggle("orange__text");
  uiUxItems.forEach((item) => {
    item.classList.toggle("active");
  });
});

const buttons = document.querySelectorAll(".send-message__btn");

buttons.forEach((item) => {
  item.addEventListener("click", () => {
    alert("Сообщение отправлено");
  });
});

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal()
  })
})

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest('.modal')
    closeModal(modal);
  });
});


function openModal(modal) {
  if(modal == null) return
  modal.classList.add("active");
  overlay.classList.add("active");
}
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}