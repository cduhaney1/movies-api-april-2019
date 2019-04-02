const express = require("express");
const Router = epxpress.Router;

//const controller = require('../controllers/movies-api');
// Create a const variable for the router
const movieApiRoutes = Router();
const {
  create,
  retrieveAll,
  update,
  deleteOne
} = require("../controllers/movies-api");

// Add handlers for my routes
// 1. With APIs always want to have a GET, POST, PUT, and DELETE

// GET
movieApiRoutes.get("/", retrieveAll);

// POST
movieApiRoutes.post("/", create);

// PUT

movieApiRoutes.put("/", update);

// DELETE
movieApiRoutes.delete("/", deleteOne);

// Export the router
module.exports = movieApi;
