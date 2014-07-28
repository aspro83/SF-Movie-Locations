define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/main.html',
    'collections/movies',
    'views/movielist'
], function($, _, Backbone, mainTemplate, MoviesCollection, MovieListView) {

    var AppView = Backbone.View.extend({

        el: '.movie-search',
        template: _.template(mainTemplate),
        map: null,
        geocoder: null,

        initialize: function() {

            this.collection = new MoviesCollection();
            this.collection.bind("reset", _.bind(this.fetched, this));
            this.collection.fetch();

            this.setUpMap();
        },

        setUpMap: function() {
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
            this.map = new google.maps.Map(mapDiv, mapOptions);
            this.geocoder = new google.maps.Geocoder();

            // resize map to be mostly full screen
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
        },

        fetched: function() {
            this.movieList = new MovieListView({collection:this.collection, map:this.map, geocoder:this.geocoder});
            this.render();
        },

        render: function() {
            this.$el.html(this.template);
        }
    });

    return AppView;
});
