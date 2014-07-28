require.config({
  // baseUrl:'../',
  paths: {
    jquery: 'libs/jquery-min',
    underscore: 'libs/underscore-min',
    backbone: 'libs/backbone-min',
    text: 'libs/text',
    autocomplete: 'libs/backbone.autocomplete.min'
  },
  shim: {
        'underscore': {
          exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'autocomplete': {
            deps: ['backbone', 'jquery']
            // exports: 'typeahead'
        }
    }
});

require(['views/app'], function(AppView){

    $(function() {
        new AppView();
    });
});