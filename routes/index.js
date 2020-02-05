// Setting up dependencies and imports
const path = require("path");
const router = require("express").Router();

let fetch   = require('node-fetch')


//vvvv That variable is for use when we create our api route.
const apiRoutes = require("./api");


// API Routes
router.use("/api", apiRoutes);

router.get('/proxy', (req, res) => {
  return res.json({
    works : 'works'
  })
})
let Token = "rmFiSaAEylAZFWQPFJRikUJrOivQEoIX";
// these our proxy routes
router.get(fetch(`https://tidesandcurrents.noaa.gov//api/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&date=today&datum=MLLW&station=9410230&time_zone=lst_ldt&units=english&interval=hilo&format=json`), 
(req, res, next) => {

  console.log('fetching all spots')


  fetch(`https://tidesandcurrents.noaa.gov//api/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&date=today&datum=MLLW&station=9410230&time_zone=lst_ldt&units=english&interval=hilo&format=json`)
  .then( (response) => {
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


// // these our proxy routes
router.get('/proxy/spot/all', (req, res, next) => {

  console.log('fetching all spots')

  fetch('https://tidesandcurrents.noaa.gov//api/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&date=today&datum=MLLW&station=9410230&time_zone=lst_ldt&units=english&interval=hilo&format=json').then( (response) => {
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


// router.get('/proxy/spot/:id', (req, res, next) => {
//   console.log("I am here", req.params.id)
//   fetch('http://api.spitcast.com/api/spot/forecast/' + req.params.id).then( (response) => {
//     return response.json()
//   }).then( (json) => {
//     console.log(json)
//     res.json(json)
//   }).catch( (e) => {
//     console.log("error fetching spot forecast")
//     res.json( {
//       error : true,
//       error_likely : "forecase for this spot does not exist", 
//       error_message : e
//     })
//   })
// })











// If no API routes are hit, send the React app
// make sure the route always can refer to a FILE
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

//console.log(" I am index.js for api")
module.exports = router;
//
// const fs = require('fs');
// const path = require('path');

// module.exports = (app) => {
//   // API routes
//   fs.readdirSync(__dirname + '/api/').forEach((file) => {
//     require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
//   });
// };
