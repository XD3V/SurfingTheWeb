// Setting up dependencies and imports
const path = require("path");
const router = require("express").Router();

//vvvv That variable is for use when we create our api route.
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;