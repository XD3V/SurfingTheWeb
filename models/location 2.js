const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
   
    // array of objects, each object represents a spot 
    // each spot has a name and a URL
    spot_urls : [{
        name : { type : String, required : true },
        url  : { type : String, required : true }
    }],
    // array of objects, each object represents a live stream
    // each live stream has a name and a URL 
    live_stream_urls : [{
        name : { type : String, required : true },
        url  : { type : String, required : true }
    }],
    // time when the session was initiated 
    timestamp:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('location', locationSchema);
