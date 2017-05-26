function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.querySelector('.map'), {
    center: {lat: latitude, lng: longitude},
    scrollwheel: false,
    zoom: 8
  });

  //var image = "img/favicon.png";
  /*var shipMarker = new google.maps.Marker({
    position: {lat: latitude, lng: longitude},
    map: map,
    //icon: image,
    title: "Miami Trader"
  });*/
}