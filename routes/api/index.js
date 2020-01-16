const router = require("express").Router();
const surfRoutes = require("./account");

// surf routes
router.use("/account", surfRoutes);

//console.log("I'm api/index.js")
module.exports = router;
