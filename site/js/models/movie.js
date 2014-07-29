define([
    'backbone'
], function(Backbone) {

    var Movie = Backbone.Model.extend({
        defaults: {
            title: '',
            release_year: 'Unknown',
            locations: '',
            director: '',
            actor_1: '',
            actor_2: '',
            actor_3: '',

            // To use later if needed
            fun_facts: '',
            production_company: '',
            distributor: ''
        }
    });

    return Movie;
});