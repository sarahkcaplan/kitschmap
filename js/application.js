$(document).ready(function() {

  var locations = [
    {lat:37.759618, lng:-122.421696, name: 'Paxton Gate'},
    {lat:37.7595534, lng:-122.4237972, name: '826 Valencia Pirate Supply Store'},
    {lat:37.7913616, lng:-122.4228095, name: 'Kozy Kar'}

  ]

  function initMap(){
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: {lat:37.7880, lng:-122.4074}
    });


    for(city in locations){
      var latLng = {lat: locations[city].lat, lng: locations[city].lng};
      var marker = new google.maps.Marker({
        position: latLng,
        map : map
      });
    }
  };

  function viewModel(){
    this.category = ko.observable('kitsch');
  };

ko.applyBindings(viewModel);

});

