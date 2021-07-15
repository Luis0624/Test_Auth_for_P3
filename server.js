
const mongoose = require('mongoose');
const express = require('express');
const routes = require("./routes");
const app = express();
const morgan = require('morgan'); 
app.use(morgan('tiny'));

require('./initDB')();

const port = process.env.PORT || 5000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);



app.listen(port, () => {
  console.log("Server started on PORT : ", port);
})

// notes 
// 