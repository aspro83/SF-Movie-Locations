define([
    'backbone'
], function(Backbone) {

    var Movie = Backbone.Model.extend({

        title: '',
        release_year: '',
        locations: '',
        actor_1: '',
        actor_2: '',
        actor_3: '',

        // To use later is needed
        fun_facts: '',
        director: '',
        production_company: '',
        distributor: ''
    
    });

    return Movie;
});