// jQuery code for changing title ID based on 
/*
from
<div id="carousel-item-2" class="ease-in-out duration-700 green task-container border-primary-green absolute inset-0 transition-transform transform translate-x-full z-20" data-carousel-item="">
                    
                </div>
<div id="carousel-item-2" class="ease-in-out duration-700 green task-container border-primary-green absolute inset-0 transition-transform transform z-20 translate-x-0 z-30" data-carousel-item="">
                    
                </div>
<div id="carousel-item-2" class="ease-in-out duration-700 green task-container border-primary-green absolute inset-0 transition-transform transform z-30 -translate-x-full z-10" data-carousel-item="">
                    
                </div>
<div id="carousel-item-2" class="ease-in-out duration-700 green task-container border-primary-green absolute inset-0 transition-transform transform z-30 -translate-x-full z-10 hidden" data-carousel-item="">
                    
                </div>

*/
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// Find index of div[data-carousel-item] that has class "z-30", which is visible on the screen
async function findIndexOfCarouselItem (){
  // let index = 0;
  // const carouselItems = $('[data-carousel-item]');
  // for (let i = 0; i < carouselItems.length; i++) {
  //   if (carouselItems.eq(i).hasClass('translate-x-0')) {
  //     index = i;
  //     console.log(i);
  //     break;
  //   }
  // }
  // console.log(index);
  // return index;
  await sleep(500);
  console.log($('[data-carousel-item]').index($(".translate-x-0")));
  console.log(typeof($('[data-carousel-item]').index($(".translate-x-0"))));
  return $('[data-carousel-item]').index($(".translate-x-0"));
}

// Update title ID function
const updateTitle = (index) => {
  let title = "";
  let color = "";
  switch (index){
    case 0:{
      title = "Do";
      color = "bg-primary-red";
      break;
    }
    case 1: {
      title = "Schedule";
      color = "bg-primary-green";
      break;
    }
    case 2: {
      title = "Delegate";
      color = "bg-primary-blue";
      break;
    }
    case 3: {
      title = "Delete";
      color = "bg-primary-yellow";
      break;
    }
    default: // Fallback, set to index of active
      title = "???";         
  }
  $('#carousel-title').text(title);
  // Remove all classes starting with "bg-primary"
  $('#carousel-hr').removeClass(function(index, className) {
    // Match classes starting with "bg-primary"
    console.log(className.match(/\bbg-primary\S+/g) || []);
    return (className.match(/\bbg-primary\S+/g) || []).join(' ');
  });
  $('#carousel-hr').addClass(color);
}

// document.ready
$(document).ready(function() {
  // updateTitle(0);

  // When button[data-carousel-prev] or button[data-carousel-next] is clicked, change the title ID
  $('[data-carousel-prev], [data-carousel-next]').on('click', async function() {
    const index = await findIndexOfCarouselItem();
    updateTitle(index);
  });
});
