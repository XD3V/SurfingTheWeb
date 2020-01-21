// Setting up dependencies
const express = require("express");
const app = express();

let morgan = require('morgan')

const routes = require("./routes");

const PORT = process.env.PORT || 3001;

//Define middleware here
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('dev'))

//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes)

// Connect to the Mongo Db
const mongoose = require("mongoose");
console.log("Connecting to Mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/Web_Surfing_demo", {
//mongoose.connect(`mongodb+srv://Admin:Admin1@cluster0-g2fig.mongodb.net/test?retryWrites=true&w=majority`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch(err => {
        console.log(err);
        console.log("Could not connect");
    });

// Start the API server
app.listen(PORT, function(){
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


//  git commit -m "updating the sever.js file so we can use our localhost database to test and see if everhting is running and worki 
//ng properly."