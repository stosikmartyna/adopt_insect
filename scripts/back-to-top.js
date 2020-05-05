(function() {
  
    function trackScroll() {
      let scrollHeight = window.pageYOffset;
      let goTopBtn = document.querySelector('.back-to-top-button');
      
      if (scrollHeight > 80) {
        goTopBtn.classList.add('back-to-top-button-visible');
      }
      if (scrollHeight < 80) {
        goTopBtn.classList.remove('back-to-top-button-visible');
      }
    }
  
    window.addEventListener('scroll', trackScroll);
})();