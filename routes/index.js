// Setting up dependencies and imports
const path = require("path");
const router = require("express").Router();

//vvvv That variable is for use when we create our api route.
const apiRoutes = require("./api");
// needed for proxying requests to upstream API (spitcast api)
let fetch         = require('node-fetch')


// API Routes
router.use("/api", apiRoutes);

// PROXY ROUTES

router.get('/proxy/spot/all', (req, res, next) => {
  fetch('http://api.spitcast.com/api/spot/all').then( (response) => {
    return response.json()
  }).then( (json) => {
    //console.log(json)
    res.json(json)
  }).catch( (e) => {
    res.json({
      error : true,
      error_message : e
    })
  })
})

router.get('/proxy/spot/:id', (req, res, next) => {

  console.log("I am here", req.params.id)

  fetch('http://api.spitcast.com/api/spot/forecast/' + req.params.id).then( (response) => {
    return response.json()
  }).then( (json) => {
    console.log(json)
    res.json(json)
  }).catch( (e) => {
    console.log("error fetching spot forecast")
    res.json( {
      error : true,
      error_likely : "forecase for this spot does not exist", 
      error_message : e
    })
  })
})


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

// const fs = require('fs');
// const path = require('path');

// module.exports = (app) => {
//   // API routes
//   fs.readdirSync(__dirname + '/api/').forEach((file) => {
//     require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
//   });
// };
