export const openModal = () => {
   const modal = document.getElementById('modal');
   modal.className = '';
}

export const closeModal = () => {
  const modal = document.getElementById('modal');
  modal.className = 'hidden';
}
