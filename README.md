### First React Application
`Step-1`-> Imported react, useState,useEffect from react library.

`Step-2`-> Created a functional component called `App`.

`Step-3`-> Used OMDb.api for free api.

`Step-4`-> Used useEffect to load the data from api at start of the application.

`Step-5`-> Created a async function to fetch the data from api.

`Step-6`-> Created a search bar for searching the movie.

`Step-7`-> Created a div with <i> className</i>=`Container` to display the movie data statically.

`Step-8`-> As the static approach displays only one movie at a time , we need to create a dynamic approach to display all the movies.

`Step-9`-> So I created a <i>.jsx</i> file called `MovieCard.jsx` to display all the movies dynamically and imported it into `App.js`.

`Step-10`-> Created a state to store the movie data and used map function to display all the movies.

`Step-11`-> To make search bar work created a state to store <i>`searchTerm`</i>.

`Step-12`-> And to make search icon work used onClick function to search the movie with title stored in <i>`searchTerm`</i>.
