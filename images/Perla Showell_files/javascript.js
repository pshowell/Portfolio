
$(document).ready(function(){
  sizeTheVideo();
  $(window).resize(function(){
    sizeTheVideo();
  });
});

function sizeTheVideo(){
  // - 1.78 is the aspect ratio of the video
// - This will work if your video is 1920 x 1080
// - To find this value divide the video's native width by the height eg 1920/1080 = 1.78
  var aspectRatio = 1.78;

    var video = $('#videoWithJs iframe');
    var videoHeight = video.outerHeight();
    var newWidth = videoHeight*aspectRatio;
		var halfNewWidth = newWidth/2;

  //Define the new width and centrally align the iframe
  video.css({"width":newWidth+"px","left":"50%","margin-left":"-"+halfNewWidth+"px"});
}








$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

// Form submit button

$(document).ready(function() {
    $("#button").click(function() {
        $(".form-group").attr("action",
                       "mailto:perlashowell@gmail.com?subject=" +
                       $("#name").val() + '&body=' + $("#email").val() + '&body=' + $("#comments").val());
        $(".form-group").submit();
    });
});
