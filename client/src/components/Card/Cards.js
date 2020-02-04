
import React, { Component } from "react"
import { Cards}  from './index';
import './style.css';
//import { render } from "react-dom";
//import Forecast from './forecastC'
// these are the Cardss of the respective different beaches

class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  //   // pre approved spots array
  //   pre_approved_spots = [0, 1, 6]


  // component was mounted
  componentDidMount() {
    //let spotId= ["9410230"]
    console.log('going to fetch now')
    // pre-fetch data to populate UI before it is rendered
    fetch(`/proxy/spot/all`)
      .then(res => res.json())
      .then(json => {
        //console.log(json.stations[i])
        let items_array = []

        for (let i = 0; i < 42; i++) {
          //  if (this.pre_approved_spots.includes(json.stations[i]))

          //console.log('response is', json.stations[i].id)
          let newObj = {
            name: json.stations[i].name,
            id: json.stations[i].id
          }
          console.log(newObj)

          items_array.push(newObj)
          //console.log("total items pushed", items_array.length)
          //console.log(items_array)

          this.setState({
            items: items_array,
            isLoaded: true,
          })


        } //}

      }).catch((err) => {
        console.log(err);
      });

      }


      render()
      {
          return(
            <div>
                <Cards />
            </div>
           )
      }

}



export default Card
























// import React, { Component } from "react"
// import { Cards } from './index';
// import './style.css';
// //import Forecast from './forecastC'
// // these are the Cardss of the respective different beaches

// class navCards extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       items: [],
//       isLoaded: false
//     }
//   }

//   // pre approved spots array
//   pre_approved_spots = [397, 638, 1, 10, 200, 201, 202, 203, 204, 205]


//   // component was mounted
//   componentDidMount() {

//     console.log('going to fetch now')
//     // pre-fetch data to populate UI before it is rendered
//     fetch('/proxy/spot/all')
//       .then(res => res.json())
//       .then(json => {

//         let items_array = []

//         for (let i = 0; i < json.length; i++) {

//           if (this.pre_approved_spots.includes(json[i].spot_id)) {
//             let newObj = {
//               county_name: json[i].county_name,
//               latitude: json[i].latitude,
//               lonngitude: json[i].lonngitude,
//               spot_id: json[i].spot_id,
//               spot_name: json[i].spot_name
//             }
//             items_array.push(newObj)
//             console.log(json[i])
//           } else {
//             // ignore this spot
//           }


//         }

//         console.log("total items pushed", items_array.length)
//         console.log(items_array)

//         console.log('response is', json)
//         this.setState({
//           items: items_array,
//           isLoaded: true,
//         })
//       }).catch((err) => {
//         console.log(err);
//       });
//   };












//   render() {

//     // beaches are still loading from API
//     if (this.state.items.length === 0) {
//       return (
//         <div class="preloader-wrapper big active">
//           <div class="spinner-layer spinner-blue-only">
//             <div class="circle-clipper left">
//               <div class="circle"></div>
//             </div><div class="gap-patch">
//               <div class="circle"></div>
//             </div><div class="circle-clipper right">
//               <div class="circle"></div>
//             </div>
//           </div>
//         </div>
//       )
//     }


//     return (

//       <div>
//         <div className='container-fluid d-flex justify-content-center'>
//           <div className='row'>
//             <div className='col-md-2'>
//               <Cards title1='Beach Name' title={this.state.items[0].spot_name} county={this.state.items[0].county_name} spot_id={this.state.items[0].spot_id} />
//             </div>
//           </div>
//         </div>
//       </div>


//     );
//   }
// }

// export default navCards;
