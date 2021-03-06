define([
    'jquery',
    'backbone',
    'views/moviesummary',
    'collections/movies'
], function($, Backbone, MovieSummaryView, MoviesCollection) {
    
    var MovieListView = Backbone.View.extend({

        el: '.movie-search',
        filter: null,
        geoMarkers: [],
        
        events: {
            "keyup #movie-name-search" : "filterList"
        },

        initialize: function(options) {
            this.map = options.map;
            this.geocoder = options.geocoder;
        },
        
        filterList: function(ev) {
            this.filter = $(ev.target).val();
            this.render();
        },

        render: function() {
            // Goes through the movies collection matching movie titles with the filter
            // Appends and calls render for each matched moviesummary view

            var isMatchedMovie = true,
                view = null,
                title = '',
                locations = '';

            this.$(".movie-list").empty();
            
            //kill the render after it has cleared if the filter is empty
            if (this.filter.length === 0) { return; }
            
            var filter = this.filter.toLowerCase();
            var movielist = this.collection.select(function(movie) {
                
                title = movie.get("title").toLowerCase();
                //sift out empty locations
                locations = movie.get("locations") || false;
                isMatchedMovie = title.indexOf(filter) !== -1 && locations != false;

                if (isMatchedMovie === true) {
                    view = new MovieSummaryView({
                        model: movie,
                        map: this.map,
                        geocoder: this.geocoder,
                        parent: this
                    });
                    this.$(".movie-list").append(view.render().el);
                }
                return isMatchedMovie;
            }, this);

            // Handle empty matches
            if (movielist.length === 0) {
                this.$(".movie-list").append('No results');
            }
        },

        getGeoMarkers: function() {
            return this.geoMarkers;
        },

        setGeoMarkers: function(geoMarker) {
            if (geoMarker === null) {
                this.geoMarkers = [];
            } else {
                this.geoMarkers.push(geoMarker);
            }
        }
    });

    return MovieListView;
});