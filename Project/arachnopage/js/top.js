const btn__up = document.querySelector('.up');
const class__top = document.querySelector('.to-top');
window.onscroll = function() {
    class__top.classList.add('to-top-on');
  }
  btn__up.onclick = function() {
      window.scrollTo(0, 0);
      
  }