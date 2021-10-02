// This index file is only for the setup of the server
import express from "express";

// this allows us to take in incoming post request bodies
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

// Initializing our express application as a function
const app = express();

//  Specifing the port of our application
const PORT = 5000;

// Initializing the bodyparser middleware
app.use(bodyParser.json());

// in here we set the starting path for all the routes that'll be used in the users file
app.use("/users", usersRoutes);

// create our first route with type GET: the first param is the path to request to, second param is the callback function which accept two param
// our API will be handling some users in a database
app.get("/", (req, res) => res.send("Hello from Homepage."));

// Make our application listen for incoming request
app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);
