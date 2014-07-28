define([
  'backbone',
  'models/movie'
  ], function(Backbone, Movie) {

    var MoviesCollection = Backbone.Collection.extend({
        
        model: Movie,

        // initialize: function() {
        //     console.log("init");
        //     // this.collection.bind("reset", _.bind(this.render, this));
        //     // this.fetch();

        // },

        url: function(){
            return 'http://cryptic-hamlet-1877.herokuapp.com/movies/';
        },

        fetch: function() {
            console.log("fetching");
            $.ajax('http://cryptic-hamlet-1877.herokuapp.com/movies/', {
                dataType: 'jsonp',
                success : this.onFetchSuccess.bind(this)
            });
            
        },
        onFetchSuccess: function(model, response) {
            console.log("got data");
            // console.log(model);
            this.reset(model);
            
        }

        // Backbone.sync = function(method, model) {
        //     alert(method + ": " + model.url);
        // };

        // var accounts = new Backbone.Collection;
        // accounts.url = '/accounts';

        // accounts.fetch();
            
    });

    return MoviesCollection;
});