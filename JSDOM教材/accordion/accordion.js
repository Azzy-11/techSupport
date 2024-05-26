'use strict'

{
  const menuContents = document.querySelectorAll(".menu-content");
  const downArrows = document.querySelectorAll(".fa-angle-down");
  const upArrows = document.querySelectorAll(".fa-angle-up");

  /*
  // アコーディオンの内容を表示させる処理
  downArrows.forEach((downArrow, index) => {
    downArrow.addEventListener('click', () => {
      menuContents[index].classList.remove('display-none');
      upArrows[index].classList.remove('display-none');
      downArrows[index].classList.add('display-none');
    })
  })

  // アコーディオンの内容を非表示させる処理
  upArrows.forEach((upArrow, index) => {
    upArrow.addEventListener('click', () => {
      menuContents[index].classList.add('display-none');
      upArrows[index].classList.add('display-none');
      downArrows[index].classList.remove('display-none');
    })
  }) */

  const toggleAccordion = (index) => {
    menuContents[index].classList.toggle('display-none');
    upArrows[index].classList.toggle('display-none');
    downArrows[index].classList.toggle('display-none');
  };

  downArrows.forEach((downArrow, index) => {
    downArrow.addEventListener('click', () => {
      toggleAccordion(index);
    })
  })

  upArrows.forEach((upArrow, index) => {
    upArrow.addEventListener('click', () => {
      toggleAccordion(index);
    })
  })



  
}
