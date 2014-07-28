define([
    'jquery',
    'backbone',
], function($, Backbone) {

  var movies;

  function MovieProvider() {
    this.init();
  }

  _.extend(MovieProvider.prototype, Backbone.Events);

  MovieProvider.prototype.init = function() {
    var self = this;
    //make ajax call
    $.getJSON("/movies", function(data) {
      movies = data;
      self.trigger('ready');
    })
  };

  Backbone.sync = function(method, model, options) {
    options || (options = {});

    switch (method) {
      case 'create':
      break;

      case 'update':
      break;

      case 'delete':
      break;

      case 'read':
        options.success(movies)
      break;
    }
  };

  return MovieProvider;
});