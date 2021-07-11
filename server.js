// require('./initDB')();
const mongoose = require('mongoose');
const express = require('express');
// const mongoose = require('mongoose');
// const routes = require("./src/routes");
const app = express();
const morgan = require('morgan'); 
app.use(morgan('tiny'));

require('./initDB')();

const port = process.env.port || 5000;

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/vinoVR");

// Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });

app.listen(5000, () => {
  console.log("Server started on PORT : ", port);
})