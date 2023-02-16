const buttonOpenModal = document.querySelector('#open-modal');

//contenido del modal
const modalContainer = document.querySelector('#mymodal');

//close modal
const buttonClose = document.querySelector('.close');

buttonOpenModal.addEventListener('click', () => {
    modalContainer.classList.add('open-modal')
});

buttonClose.addEventListener('click', () => {
    modalContainer.classList.remove('open-modal')
})