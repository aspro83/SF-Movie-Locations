describe('tests (async) for Movie Summary View', function() {

    beforeEach(function(done) {
        _this = this;
     
        require(['views/moviesummary', 'models/movie'], function(MovieSummaryView, Movie) {
            $('body').append('<ul class="movie-list"></ul>');
            _this.movie = new Movie({ title: 'Back to the Future', locations: 'The future' });
            _this.view = new MovieSummaryView({model: _this.movie});
            done();
        });
    });
 
    afterEach(function(done) {
        this.view.remove();
        $('.movie-search').remove();
        done();
    });

    it('Should be tied to a DOM element when created, based off the property provided.', function(done) {
        expect(this.view.el.tagName.toLowerCase()).toBe('li');
        done();
    });
});