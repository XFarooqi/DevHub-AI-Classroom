
$(document).ready(function(){
    window.scrollTo(0, 0);
    showConfetti();
})

var clickDisabled = false;
$(document).on('click', '.party-popper', function(){
    if (!clickDisabled) {
        // Disable button click event for 2 seconds
        clickDisabled = true;
        setTimeout(function() {
          clickDisabled = false;
        }, 3000);
        showConfetti();
    }
})

$(document).on('click', '.explore-roadmap-btn', function(e) {
  e.preventDefault();
  var roadmapType = $(this).data('roadmap-type') + '.html';
  $('.main-content-wrapper').load(roadmapType, function(){
      toggleTheme();
  });
})

/*
* Confetti properties
*/
function showConfetti() {
    var count = 700;
    var defaults = {
       origin: { y: 0.7 }
    };
     
     function fire(particleRatio, opts) {
       confetti(Object.assign({}, defaults, opts, {
         particleCount: Math.floor(count * particleRatio)
       }));
     }
     
     fire(0.25, {
       spread: 26,
       startVelocity: 55,
     });
     fire(0.2, {
       spread: 60,
     });
     fire(0.35, {
       spread: 100,
       decay: 0.91,
       scalar: 0.8
     });
     fire(0.1, {
       spread: 120,
       startVelocity: 25,
       decay: 0.92,
       scalar: 1.2
     });
     fire(0.1, {
       spread: 120,
       startVelocity: 45,
     });
}