$(function() {
  var coverImage = $(".full-background-image");
  var altCoverImage = $(".full-background-image2");
  var images;
  var cloneArray = [];

  $.getJSON("/users/pictures.json", function(data) {
    images = data;
  });

  function distributeRandomImages(number) {
    if (images.length < 2) {
      images = cloneArray;
      cloneArray = [];
    } else {
      cloneArray.push(images[number])
      images.splice(number, 1);
    }
  }

  function fadeImageTo(prevImage, nextImage) {
    var randomNumber = Math.floor(Math.random() * images.length);
    nextImage.css("zIndex", "-2");
    prevImage.css("zIndex", "-1");
    nextImage.attr({src: images[randomNumber]});
    nextImage.show();
    prevImage.fadeOut(1000);
    distributeRandomImages(randomNumber);
  }

  setTimeout(function() {
    setInterval(function() {
      // There are two <img> elements. The function sets the their src differently and toggle fades between the two, also changing their z-index for a smooth transition fading from picture to picture
      if (coverImage.is(":visible")) {
        fadeImageTo(coverImage, altCoverImage);
      } else {
        fadeImageTo(altCoverImage, coverImage);
      }
    }, 8000); 
  }, 2000);

});