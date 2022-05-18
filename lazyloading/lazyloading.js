document.addEventListener('DOMContentLoaded', ()=>{
  let lazyloadImages = document.querySelectorAll('img.lazy');
  let lazyloadThrottleTimeout;

  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }
    lazyloadThrottleTimeout = setTimeout(() => {
      let scrollTop = window.scrollY;
      lazyloadImages.forEach((value) => {
        if(value.offsetTop < (window.innerHeight + scrollTop )) {
          value.src = value.dataset.src;
          value.classList.remove('lazy');
        }
      });

      if(lazyloadImages.length == 0) {
        document.removeEventListener('scroll', lazyload);
        window.removeEventListener('resize', lazyload);
        window.removeEventListener('orientationchange', lazyload);
      }
    }, 20);
  }
  document.addEventListener('scroll', lazyload);
  window.addEventListener('resize', lazyload);
  window.addEventListener('orientationchange', lazyload);
});