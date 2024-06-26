'use strict'

{
  const menuContents = document.querySelectorAll(".menu-content");
  const downArrows = document.querySelectorAll(".fa-angle-down");
  const upArrows = document.querySelectorAll(".fa-angle-up");

  const fadeIn = {opacity: [0, 1]};
  const fadeOut = {opacity: [1, 0]};
  const options = {
    duration: 1000,
    easing: 'ease',
    fill: 'forwards'
  };

  const animation = (content, effect) => {
    return new Promise((resolve) => {
      const animation = content.animate(effect, options);
      // animation.addEventListener('finish', () => resolve());
      animation.onfinish = resolve; //どっちでもよい
    });
  };
  
  const toggleAccordion = async (index) => {
    const isOpen = !menuContents[index].classList.contains('display-none');
    
    if (isOpen) {
      await animation(menuContents[index], fadeOut);
      menuContents[index].classList.toggle('display-none');
    } else {
      menuContents[index].classList.toggle('display-none');
      await animation(menuContents[index], fadeIn);
    }

    upArrows[index].classList.toggle('display-none');
    downArrows[index].classList.toggle('display-none');
  };

  downArrows.forEach((downArrow, index) => {
    downArrow.addEventListener('click', () => {
      toggleAccordion(index);
    })
  });

  upArrows.forEach((upArrow, index) => {
    upArrow.addEventListener('click', () => {
      toggleAccordion(index);
    })
  });



  
}
