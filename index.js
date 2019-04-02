// Express code that is needed
const express = require("express");

// Express has to listen on its own port (Note: typically start port at 3000 or higher)
const PORT = 3000;

// I need to create an app with express
const app = express();

// I need to connect a router in order for everything to connect together
// Hint: like a switch board

// I need express to listen on the port
app.listen(PORT, () => {
  console.log(`Running on ${PORT}!`);
});
