define([
  'underscore',
  'jquery',
  'backbone'
], function(_, $, Backbone) {
    var map;

    function MapProvider() {
        // google.maps.event.addDomListener(window, 'load', this.init());
        this.init();
    }

    _.extend(MapProvider.prototype, Backbone.Events);

    MapProvider.prototype.init = function() {
        if (map) return;

        console.log("map init");

        var mapDiv = $("#map-canvas")[0];

        var mapOptions = {
            center: new google.maps.LatLng(37.7833, -122.4167),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            panControl: false,
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            scaleControl: false,
            overviewMapControl: false
        };
        map = new google.maps.Map(mapDiv, mapOptions);
        console.log(map);


        var $win = $(window);
        var setMapSize = function() {
            if ($win.width() >= 500) {
                $(mapDiv).height($win.height());
            } else {
                $(mapDiv).height(300);
            }
        };
        $win.resize(setMapSize);
        setMapSize();


  };
  MapProvider.prototype.setAddress = function(address) {
    var fullAddress = address + " San Francisco, CA";
    geocoder.geocode( { 'address': fullAddress}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
    });
}

  // MapProvider.executeSearch = function(query) {
  //   if (typeof query === "undefined") return;
  //   query = query + "";
  //   var idx = query.indexOf("(");
  //   if (idx > 0) {
  //     var idx2 = query.indexOf(")", idx);
  //     query = query.substring(idx + 1, idx2);
  //   }


  //   gLocalSearch.setCenterPoint(map.getCenter());
  //   gLocalSearch.execute(query + ", San Francisco, CA");
  // }

  // Called when Local Search results are returned, we clear the old
  // results and load the new ones.
  function OnLocalSearch() {
    if (!gLocalSearch.results || gLocalSearch.results.length == 0) return;

    for (var i = 0; i < gCurrentResults.length; i++) {
      gCurrentResults[i].marker.setMap(null);
    }
    gCurrentResults = [];
    for (var i = 0; i < gLocalSearch.results.length; i++) {
      gCurrentResults.push(new LocalResult(gLocalSearch.results[i]));
    }

    // Move the map to the first result
    var first = gLocalSearch.results[0];
    map.setCenter(new google.maps.LatLng(parseFloat(first.lat), parseFloat(first.lng)));

  }

  // A class representing a single Local Search result returned by the
  // Google AJAX Search API.
  function LocalResult(result) {
    console.log("searching");
    var position = new google.maps.LatLng(parseFloat(result.lat), parseFloat(result.lng))
    this.marker = new google.maps.Marker({position: position, icon: gMarker, shadow: gMarkerShadow, map: map});
  }

  return MapProvider;
});