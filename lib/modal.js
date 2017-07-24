export const openModal = () => {
   const modal = document.getElementById('modal');
   const modalContainer = document.getElementById('modal-container');
   modal.className = 'modal';
   modalContainer.className = 'modal-container';

}

export const closeModal = () => {
  const modal = document.getElementById('modal');
  const modalContainer = document.getElementById('modal-container');
  modalContainer.className = 'hidden';
  modal.className = 'hidden';
}

export const openGameOverModal = () => {
   const modal = document.getElementById('game-over-modal');
   const modalContainer = document.getElementById('modal-container');
   modalContainer.className = "modal-container"
   modal.className = 'modal';
   const score = document.getElementById('score').innerText;
   const gameOverScore = document.getElementById('game-over-score');
   gameOverScore.innerText = `You scored: ${score}`;
}

export const closeGameOverModal = () => {
  const modal = document.getElementById('game-over-modal');
  const modalContainer = document.getElementById('modal-container');
  modalContainer.className = 'hidden';
  modal.className = 'hidden';
  const score = document.getElementById('score');
  score.innerText = "0";
}
