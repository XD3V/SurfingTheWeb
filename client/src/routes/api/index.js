const router = require("express").Router();
const surfRoutes = require("./signin");

// surf routes
router.use("/api", surfRoutes);

module.exports = router;
