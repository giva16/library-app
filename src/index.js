// Entry point for our source codes
import './css/style.css';
import '@fortawesome/fontawesome-free/css/all.css';

const addBookBtn = document.querySelector('#add-book');
const closeFormBtn = document.querySelector('#close-form');
const formModal = document.querySelector('#add-book-modal');

addBookBtn.addEventListener('click', () => {
  formModal.showModal();
});

closeFormBtn.addEventListener('click', () => {
  formModal.close();
});
