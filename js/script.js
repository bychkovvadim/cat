var map;
var positionMap = {lat: 59.938708, lng: 30.323036};
var navToggle = document.querySelector('.nav-toggle');
var navigation = document.querySelector('.site-list');

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: positionMap,
    zoom: 17,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  var marker = new google.maps.Marker({
    position: positionMap,
    icon: 'img/map-pin.png',
    map: map
  });
}

navToggle.classList.remove('nav-toggle--no-js');
navigation.classList.remove('site-list--no-js');

  navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('nav-toggle--open');
    navigation.classList.toggle('site-list--close');
});
