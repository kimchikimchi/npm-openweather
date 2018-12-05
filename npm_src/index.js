/*
- Follow the instructions on [how to create an NPM package](https://docs.npmjs.com/getting-started/creating-node-modules) and create an NPM module which does the following:
	- Instantiates a basic Node HTTP server using express and body-parser NPM modules, and exports the resulting server object. ***DO NOT*** execute/run the `.listen()` method in the module.
*/
const app = require("express")();
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

module.exports = app;
