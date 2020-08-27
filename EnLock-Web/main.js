Aos.init();
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        
        // Store hash
        var hash = this.hash;
        window.location.hash = hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 50, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          
        });
      } // End if
    });
  });
$(document).ready(function(){

})
/////////////////////
//Responsive Slides//
/////////////////////
$(function() {
  $(".rslides").responsiveSlides({
    speed: 150,
    auto: true
  });
});