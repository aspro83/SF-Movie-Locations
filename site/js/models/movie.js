define([
    'backbone'
    ], function(Backbone) {

    var Movie = Backbone.Model.extend({
        Title: "",
        ReleaseYear: null,
        // Location: {},
        Locations: null,
        FunFacts: null,
        Actor1: null,
        Actor2: null,
        Actor3: null,
        Director: null,
        ProductionCompany: null,
        Distributor: null
    
    });

    return Movie;
});