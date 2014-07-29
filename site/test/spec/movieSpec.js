describe('tests for Movie model', function() {
    var movie;


    // Use require.js to fetch the module
    it("should load the AMD module", function(done) {
        require(['models/movie'], function (Movie) {
            movie = new Movie();
            expect(movie).toBeDefined();
            done();
        });
    });

  //run tests that use the myModule object
  it("can access the AMD module", function() {
    expect(movie.get('title')).toBe('');
    expect(movie.get('locations')).toBe('');
    expect(movie.get('release_year')).toBe('Unknown');
    expect(movie.get('director')).toBe('');
  });
});