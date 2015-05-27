$(function() {
  var coverImage = $(".full-background-image");
  var altCoverImage = $(".full-background-image2");
  var imageUrlPath = "/assets/";
  var images = [
    "main-cover.jpg",
    "main-cover2.jpg",
    "main-cover3.jpg",
    "main-cover4.jpg",
    "main-cover5.jpg",
    "main-cover6.jpg",
    "main-cover7.jpg"
  ];

  function distributeRandomImages(number) {
    console.log(images);
    if (images.length < 2) {
      images = [
        "main-cover.jpg",
        "main-cover2.jpg",
        "main-cover3.jpg",
        "main-cover4.jpg",
        "main-cover5.jpg",
        "main-cover6.jpg",
        "main-cover7.jpg"
      ];
    } else {
      images.splice(number, 1);
    }
  }

  function fadeImageTo(prevImage, nextImage) {
    var randomNumber = Math.floor(Math.random() * images.length);
    nextImage.css("zIndex", "-2");
    prevImage.css("zIndex", "-1");
    nextImage.attr({src: imageUrlPath + images[randomNumber]});
    nextImage.show();
    prevImage.fadeOut(1000);
    distributeRandomImages(randomNumber);
  }

  setInterval(function() {
    // There are two <img> elements. The function sets the their src differently and toggle fades between the two, also changing their z-index for a smooth transition fading from picture to picture 
    if (coverImage.is(":visible")) {
      fadeImageTo(coverImage, altCoverImage);
    } else {
      fadeImageTo(altCoverImage, coverImage);
    }
  }, 5000); 

});