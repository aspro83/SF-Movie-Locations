define([
    'jquery',
    'backbone',
    'text!templates/moviesummary.html',
    'views/moviedetail'
], function($, Backbone, summaryTemplate, MovieDetailsView) {
    
    var MovieSummaryView = Backbone.View.extend({

        tagName: 'li',
        className: 'list-group-item movie-summary',
        map: null,
        geocoder: null,
        template: _.template(summaryTemplate),

        events: {
          'click': 'onSelected'
        },
        initialize: function(options) {
            this.map = options.map;
            this.geocoder = options.geocoder;
            this.parent = options.parent;
        },

        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        },

        onSelected: function() {
            // Pulls the address from the locations prop (might be in parentheses '(100 Fake St)' )
            var location = this.model.get("locations");
            if (location.indexOf("(")) {
                this.setAddress(location.substring(location.indexOf("("), location.length - 1));
            } else {
                this.setAddress(location);
            }
            var view = new MovieDetailsView({model:this.model});
            view.render();
        },
        setAddress: function(address) {
            // Uses the google map geocoder to determine the locations based on the address param
            // Adds the marker to the map and center it

            var fullAddress = address + " San Francisco, CA";
            var _this = this;
            this.geocoder.geocode( { 'address': fullAddress}, function(results, status) {

                if (status == google.maps.GeocoderStatus.OK) {
                    _this.map.setCenter(results[0].geometry.location);
                    _this.clearMarkers();
                    var marker = new google.maps.Marker({
                        map: _this.map,
                        position: results[0].geometry.location
                    });
                    _this.parent.setGeoMarkers(marker);
                }
            });
        },

        clearMarkers: function() {
            var markers = this.parent.getGeoMarkers();
            _.each(markers, function(marker) {
                marker.setMap(null);
            });
            this.parent.setGeoMarkers(null);
        }
    });

    return MovieSummaryView;
});