SF-Movie-Locations
==================

I chose the movie locations project for the challenge mostly because I love movies. Food trucks were a close second.
I did a full stack solution.


App
http://sf-movie-locations.herokuapp.com/

Testing
http://sf-movie-locations.herokuapp.com/test/SpecRunner.html

I used:


- **Backbone**
  - No prior experience 
  - Mostly used because it was suggested. I usually use angularjs but agree it would have been overkill for such a small project and I have been meaning to give backbone a try so that I could have a comparison.
-  **RequireJS**
  - I push to use require for most projects I am on. It makes building js a lot more structured.
- **Google Maps JavaScript API v3**
  - a little experience a few years ago
- **Python/Flask** 
  -  3 months experience
  -  I recently shifted from PHP to Python and as much as I miss semi colons, the built in helper functions in Python make my life so much easier.
- **Jasmine** 
  - Small amount of experience
  - I chose Jasmine because they have a great stand alone implementation which meant I could get tests up really fast. I had to do some manipulation to wirk with requirejs but mostly it was hasslefree.


#### Notes/Thoughts
I wasn't able to spend as much time as I would have liked on this project so things I would liked to have added/fixed would be:

**Better load time**
- It is a little slow. I would bootstrap the collection object onload so that it didn't have to make an AJAX call so early. I would also add a read performant database like MongoDB to hold the data so that there was no file IO.

**Maps**
- I would have liked to skin the map and add some info windows with the movie details in there.

**Mobile Support**
- It would have been better to build it mobile first as adding mobile support would probably mean changing around the layout of the templates. 

#### Me
https://www.linkedin.com/in/daniellerobinson83
