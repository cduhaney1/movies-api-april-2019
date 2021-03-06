// This is standard skeleton code for index.js file to start of basic set up to create a small web app

// Express code that is needed
const express = require("express");

// Express has to listen on its own port (Note: typically start port at 3000 or higher)
const PORT = 4000;

//Require routers
const moviesApiRouter = require("./routes/moviesApi");

// I need to create an app with express
const app = express();

// I need to connect a router in order for everything to connect together
// Hint: like a switch board
app.use("/moviesApi", moviesApiRouter);

// I need express to listen on the port
app.listen(PORT, () => {
  console.log(`Running on ${PORT}!`);
});
