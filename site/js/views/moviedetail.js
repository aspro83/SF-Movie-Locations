define([
    'jquery',
    'backbone',
    'text!templates/moviedetails.html'
], function($, Backbone, detailTemplate) {
    var MovieDetailView = Backbone.View.extend({
        el: '.movie-detail',
        className: 'list-menu-item',

        template: _.template(detailTemplate),

        events: {
          // 'click': 'open'
        },
        initialize: function() {
            console.log(detailTemplate);
        },

        render: function() {
            console.log("rendering details");
            //clear out autocomplete
            this.$el.html(this.template(this.model.attributes));
        }
    });

    return MovieDetailView;
});