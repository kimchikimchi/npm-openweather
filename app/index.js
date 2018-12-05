
/*
	- Create a new node.js project in a new/different folder (create a `package.json` file) and run `npm install <yourpackagename>` or `npm install git+https://github.com/<yourusername>/<yourreponame>.git` to add your module as a  dependency to the project. **Note:** NPM package names and github repo names within your account, must by unique, so make sure to give your module a memorable/unique. Your main application will return weather data by making an HTTP request to the [Open Weather API](https://openweathermap.org/api) for a list of places. The data stored in the application can be stored in-memory (i.e., using an array).
	- Load your module into main application code base.
*/



/*
	- Add 4 HTTP routes to the app object:
		- GET using "api/weather" as the path will return a list of weather data for the cities in the current list/array with their weather data
		- POST using "api/weather" as the path will add a city/location to the list. Each entry should contain the following information: id (unique integer), city/location, unit format (standard, metric, or imperial)
		- UPDATE using "api/weather" as the path will receive a JSON payload with the id of the place which will be updated, the new location and new metric values, then return the new place JSON data
		- DELETE using "api/weather/:id" as the path will remove an entry from the list, and return a boolean (true if successful, false if unsuccessful)
	- Add `.listen()` as the last line of code to be executed in the main node.js application.
*/
