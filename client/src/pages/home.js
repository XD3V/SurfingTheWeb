import React, { Component } from "react";
import Card from "../components/Card/Cards";




class Home extends Component {
  render() {
   
    return (

       <>
       
       <Card  />
       
       </>

    );
  }
}

export default Home;



// import React, { Component } from "react";
// import Cards from "../components/Card/Cards";
// import api from '../api';
// class Home extends Component {
//     pre_approved_spots = [397, 638, 1, 10, 200, 201, 202, 203, 204, 205]
//     constructor(props) {
//         super(props)
//         this.state = {
//             items: [],
//             isLoaded: false,
//             currentSpot: null,
//             viewSpot: false,
//         }
//     }
//     componentDidMount() {
//         fetch('/api/spot/all')
//             .then(res => res.json())
//             .then(json => {

//                 let items_array = []

//                 for (let i = 0; i < json.length; i++) {

//                     if (this.pre_approved_spots.includes(json[i].spot_id)) {
//                         let newObj = {
//                             county_name: json[i].county_name,
//                             latitude: json[i].latitude,
//                             lonngitude: json[i].lonngitude,
//                             spot_id: json[i].spot_id,
//                             spot_name: json[i].spot_name
//                         }
//                         items_array.push(newObj)
//                         console.log(json[i])
//                     } else {
//                         // ignore this spot 
//                     }


//                 }
//             })
//     }


//     render() {

//         return (
//             <>
//                 <Cards
//                     title={this.state.items.map.spot_name}
//                     county={this.state.items.map.county_name}
//                     spot_id={this.state.items.map.spot_id}
//                 />
//             </>
//         );
//     }
// }
// export default Home;