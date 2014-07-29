describe('tests for Movie model', function() {
    var movies;

    // Use require.js to fetch the module
    it("should load the AMD module", function(done) {
        require(['collections/movies'], function (Movies) {
            movies = new Movies();
            expect(movies).toBeDefined();
            done();
        });
    });

    it('Can add Model instances as objects and arrays.', function() {
        expect(movies.length).toBe(0);

        // test single add
        movies.add({ title: 'Jurassic Park' });
        expect(movies.length).toBe(1);

        // test array add
        movies.add([
            { title: 'Aliens', locations: "OuterSpace" },
            { title: 'Back to the Future'}
        ]);
        expect(movies.length).toBe(3);
    });

    it('Can have the custom url setting for populating collections', function() {

        expect(movies.url()).toBe('http://cryptic-hamlet-1877.herokuapp.com/movies/');
    });
});