'use strict'
{
  const openBtn = document.querySelector('#open-btn');
  const closeBtn = document.querySelector('#close-btn');
  const modal = document.querySelector('#modal');

  // Modal の表示/非表示を切り替える処理(関数)
  /*
  const changeModal = (showModal) => {
    if (showModal) {
      modal.classList.add('show-modal');
    } else {
      modal.classList.remove('show-modal');
    }
  }; */
  const toggleModal = () => {
    modal.classList.toggle('show-modal');
  };

  // クリックしたらModalを表示する処理
  openBtn.addEventListener('click', () => {
    // changeModal(true);
    toggleModal();
  });
  // クリックしたらModalを削除する処理
  closeBtn.addEventListener('click', () => {
    // changeModal(false);
    toggleModal();
  });

  // マスクをクリックしたらModalを削除する処理
  modal.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target === modal) {
      toggleModal();
    }
  });
}
