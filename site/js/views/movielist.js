define([
    'jquery',
    'backbone',
    'views/moviesummary',
    'collections/movies'
], function($, Backbone, MovieSummaryView, MoviesCollection) {
    
    var MovieListView = Backbone.View.extend({
        el: '.movie-search',
        filter: null,
        geoMarkers:[],
        
        events: {
            "keyup #movie-name-search" : "filterList"
        },

        initialize: function(options) {
            this.map = options.map;
            this.geocoder = options.geocoder;

            console.log(this.map);
        },
        
        filterList: function(ev) {
            this.filter = $(ev.target).val();
            this.render();
        },

        render: function() {
            console.log("rendering list");
            var isMatchedMovie = true,
                view = null,
                title = '',
                locations = '';

            this.$(".movie-list").empty();
            
            //kill the render after it has cleared if the filter is empty
            if (this.filter.length == 0) { return; }
            
            var filter = this.filter.toLowerCase();
            var movielist = this.collection.select(function(movie) { 
                
                title = movie.get("Title").toLowerCase();
                //sift out empty locations
                locations = movie.get("Locations") || false;
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

            //get the length of the movie list here
            if (movielist.length == 0) {
                this.$(".movie-list").append('No results');
            }
        },

        getGeoMarkers: function() { return this.geoMarkers; },
        setGeoMarkers: function(geoMarker) { 
            if (geoMarker == null) {
                this.geoMarkers = [];
            } else { 
                this.geoMarkers.push(geoMarker) 
            }
        }
    });

    return MovieListView;
});