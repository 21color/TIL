document.addEventListener('DOMContentLoaded', ()=>{
  let lazyloadImage; 

  if ('IntersectionObsever' in window) {
    lazyloadImage = document.querySelectorAll('.lazy');
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          let image = entry.target; 
          image.classList.remove('lazy');
          imageObserver.unoberve(image);
        }
      });
    });

    lazyloadImage.forEach(image => imageObserver.observe(image));
  } else {
    let lazyloadThrottleTimeout;

    lazyloadImage = document.querySelectorAll('.lazy');

    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(()=>{
        let scrollTop = window.scrollY; 
        lazyloadImage.forEach( img =>  {
          if (img.offsetTop < (window.innerHeight + scrollTop)) {
            img.src = img.dataset.src;
            img.classList.remove('lazy'); 
          }
        });
        if (lazyloadImage.length == 0) {
          document.removeEventListener('scroll', lazyload);
          window.removeEventListener('resize', lazyload);
          window.removeEventListener('orientationchange', lazyload);
        }
      }, 20);
    }
    document.addEventListener('scroll', lazyload);
    window.addEventListener('resize', lazyload);
    window.addEventListener('orientationchange', lazyload);
  }
})