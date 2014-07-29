define([
    'backbone',
    'models/movie'
], function(Backbone, Movie) {

    var MoviesCollection = Backbone.Collection.extend({
        
        model: Movie,

        url: function(){
            return 'http://cryptic-hamlet-1877.herokuapp.com/movies/';
        },

        fetch: function() {
            $.ajax('http://cryptic-hamlet-1877.herokuapp.com/movies/', {
                dataType: 'jsonp',
                success : this.onFetchSuccess.bind(this)
            });
        },
        onFetchSuccess: function(model, response) {
            this.reset(model);
        }
    });

    return MoviesCollection;
});