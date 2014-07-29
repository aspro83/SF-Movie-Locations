describe('tests (async) for Movie List View', function() {

    beforeEach(function(done) {
        _this = this;
     
        require(['views/movielist', 'collections/movies'], function(MovieListView, Movies) {
            $('body').append('<div class="movie-search"></div>');
            _this.movies = new Movies();
            _this.view = new MovieListView({collection: _this.Movies});
            _this.mockMovie = { title: 'Back to the Future', locations: 'The future' };
            done();
        });
    });
 
    afterEach(function(done) {
        this.view.remove();
        $('.movie-search').remove();
        done();
    });

    it('Should be tied to a DOM element when created, based off the property provided.', function(done) {
        expect(this.view.el.tagName.toLowerCase()).toBe('div');
        done();
    });
});