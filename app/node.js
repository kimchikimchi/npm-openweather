/*
- Create a new node.js project in a new/different folder (create a `package.json` file) and run `npm install <yourpackagename>` or `npm install git+https://github.com/<yourusername>/<yourreponame>.git` to add your module as a  dependency to the project. **Note:** NPM package names and github repo names within your account, must by unique, so make sure to give your module a memorable/unique. Your main application will return weather data by making an HTTP request to the [Open Weather API](https://openweathermap.org/api) for a list of places. The data stored in the application can be stored in-memory (i.e., using an array).
- Load your module into main application code base.
*/
const rp = require("request-promise");
const app = require("express_kimchikimchi");
const PORT = process.env.PORT || 3000;


let cities = {
    1: {
        city: "Atlanta",
        unit: "imperial"
    },
    2: {
        city: "New York",
        unit: "imperial"
    },
    3: {
        city: "Seoul",
        unit: "metric"
    }
};
//- GET using "api/weather" as the path will return a list of weather data for the cities in the current list/array with their weather data


// Here we are building the URL we need to query the database
//let queryURL = `https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${APIKey}&q=`;
app.get("/api/weather", (req, res) => {
    console.log("Hitting get method");

    // This is our API key
    const APIKey = "166a433c57516f51dfab1f7edaed8413";
    let data = [];
/*
    for (const id in cities) {
        rp({
            uri: 'https://api.openweathermap.org/data/2.5/weather',
            qs: {
                units:  cities[id].unit,
                appid: APIKey,
                q: cities[id].city
            },
            json: true,
        }).then(result => {
            console.log("checking " + JSON.stringify(cities[id], null, 4));
            console.log(result);
            data.push(result);
        }).catch(err => {
            console.log("API call failed" + err);
        });
    }
*/

    // See https://blog.lavrton.com/javascript-loops-how-to-handle-async-await-6252dd3c795
    // for use of async-await in conjection of loops.
    async function callOpenWeatherAPI() {
        for (const id in cities) {
            // Wait for rp calls to complete before returning json object
            await rp({
                uri: 'https://api.openweathermap.org/data/2.5/weather',
                qs: {
                    units:  cities[id].unit,
                    appid: APIKey,
                    q: cities[id].city
                },
                json: true,
            }).then(result => {
                //console.log("checking " + JSON.stringify(cities[id], null, 4));
                //console.log(result);
                data.push(result);
            }).catch(err => {
                console.log("API call failed" + err);
            });
        }

        res.json(data);
    }

    callOpenWeatherAPI();

});

//- POST using "api/weather" as the path will add a city/location to the list. Each entry should contain the following information: id (unique integer), city/location, unit format (standard, metric, or imperial)
app.post("/api/weather", (req, res) => {
    console.log("Hitting post method");
    cities[req.body.id] = {
        city: req.body.city,
        unit: req.body.unit,
    };
    console.log(cities);
    res.json(cities[req.body.id]);
});

//- UPDATE using "api/weather" as the path will receive a JSON payload with the id of the place which will be updated, the new location and new metric values, then return the new place JSON data
app.put("/api/weather/:id", (req, res) => {
    console.log("Hitting update method " + req.params.id);
    cities[req.params.id] = {
        city: req.body.city,
        unit: req.body.unit,
    };
    console.log(cities);
    res.json(cities[req.body.id]);

});

//- DELETE using "api/weather/:id" as the path will remove an entry from the list, and return a boolean (true if successful, false if unsuccessful)
app.delete("/api/weather/:id", (req, res) => {
    console.log("Hitting delete method " + req.params.id);

    res.send(delete cities[req.params.id]);
    console.log(cities);
});

//- Add `.listen()` as the last line of code to be executed in the main node.js application.
app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});
