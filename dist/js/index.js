
document.addEventListener('DOMContentLoaded', function() {

    let modalButton = document.querySelector('.open-modal'),
        overlay = document.querySelector('.overlay'),
        closeButton = document.querySelector('.modal__close');

    modalButton.addEventListener('click', function(e) {
        e.preventDefault();
        let modalElem = document.querySelector('.section-hero__modal');
        modalElem.classList.add('active');
        overlay.classList.add('active');
    });

    closeButton.addEventListener('click', function(e) {
        e.preventDefault();
        let modalElem = document.querySelector('.section-hero__modal');
        modalElem.classList.remove('active');
        overlay.classList.remove('active');
     });
 
 
     overlay.addEventListener('click', function() {
         document.querySelector('.section-hero__modal').classList.remove('active');
         this.classList.remove('active');
         menuBtn.classList.remove('active');
         menu.classList.remove('active');
     });



   
     let menuBtn = document.querySelector('.header__burger'),
     overlayBurger = document.querySelector('.overlay-burger'),
      menu = document.querySelector('.header__nav');

     menuBtn.addEventListener('click', function(){
	    menuBtn.classList.toggle('active');
        overlayBurger.classList.toggle('active');
	    menu.classList.toggle('active');

})

 }); 