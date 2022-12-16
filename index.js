

const swiper = new Swiper('.swiper', {
    // Optional parameters\
    autoplay :{
        delay:3000,
        disableOnInteraction:false,
    },

    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

// let show_list =document.getElementbyId("nav_title");
// let nav_list =document.getElementbyId("");

function show_list(){
  show_list.style.display="block";
}
function hidelist(){
  show_list.style.display="none"
}





