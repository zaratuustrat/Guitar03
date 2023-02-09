'use strict'
document.addEventListener('click', documentClick);

function documentClick(e) {
  const targetItem = e.target;
  if (targetItem.closest('.icon-menu')) {
      document.documentElement.classList.toggle('menu-open');
  }
}

const reviewsSwiper = document.querySelector('.swiper-reviews');

if (reviewsSwiper) {
  	const swiper = new Swiper('.swiper-reviews', {
    		// Optional parameters
        loop: true,
        observer: true,
        slidesPerView: 1,
        speed:800,
      
        // observeParents: true,
        // autoHeight: true,
        // spaceBetween: 56,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      	});
      }