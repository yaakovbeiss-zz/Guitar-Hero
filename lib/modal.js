export const openModal = () => {
   const modal = document.getElementById('modal');
   modal.className = '';
}

export const closeModal = () => {
  const modal = document.getElementById('modal');
  const modalContainer = document.getElementById('modal-container');
  modalContainer.className = 'hidden';
  modal.className = 'hidden';
}
