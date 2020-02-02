  
import React, { Component } from "react"
import {Cards}from './index';
import './style.css';
//import Forecast from './forecastC'
// these are the Cardss of the respective different beaches

class navCards extends Component{

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  // pre approved spots array 
  // pre_approved_spots = [397, 638, 1, 10, 200, 201, 202, 203, 204, 205]


  // component was mounted
  componentDidMount() {

    console.log('going to fetch now')
    // pre-fetch data to populate UI before it is rendered
   // fetch('/proxy/spot/all')
      .then(res => res.json())
      .then(json => {

        let items_array = []

        for (let i = 0; i < json.length; i++) {

         /* if (this.pre_approved_spots.includes(json[i].spot_id)) {
            let newObj = {
              county_name: json[i].county_name,
              latitude: json[i].latitude,
              lonngitude: json[i].lonngitude,
              spot_id: json[i].spot_id,
              spot_name: json[i].spot_name
            }
            items_array.push(newObj)
            console.log(json[i])
          } else {
            // ignore this spot 
          } */


        }

        console.log("total items pushed", items_array.length)
        console.log(items_array)

        console.log('response is', json)
        this.setState({
          items: items_array,
          isLoaded: true,
        })
      }).catch((err) => {
        console.log(err);
      });
  };
  render() {

    // beaches are still loading from API
    if (this.state.items.length === 0) {
      return (
        <div className='container-fluid d-flex justify-content-center'>
          <div className='row'>
            <div className='col-md-4'>
              <Cards titleLoader1='Beach Name' title={
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              } />
            </div>
            <div className='col-md-4'>
              <Cards titleLoader2='Beach 2' title={
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              } />
            </div>
            <div className='col-md-4'>
              <Cards titleLoader3='Beach 3' title={
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              } />
            </div>
          </div>
        </div>
      )
    }


    return (

      <div>


        /*<div className='container-fluid d-flex justify-content-center'>

          <div className='row'>
            <div className='col-md-2'>
              <Cards title1='Beach Name' title={this.state.items[0].spot_name} county={this.state.items[0].county_name} spot_id={this.state.items[0].spot_id} />
              
            </div>
            <div className='col-md-2'>
              <Cards title2='Beach Name' title={this.state.items[1].spot_name} county={this.state.items[1].county_name} spot_id={this.state.items[1].spot_id} />
            </div>
            <div className='col-md-2'>
              <Cards title3='Beach Name' title={this.state.items[2].spot_name} county={this.state.items[2].county_name} spot_id={this.state.items[2].spot_id} />
            </div>
            <div className='col-md-2'>
              <Cards title4='Beach Name' title={this.state.items[3].spot_name} county={this.state.items[3].county_name} spot_id={this.state.items[3].spot_id} />
            </div>
            <div className='col-md-2'>
              <Cards title5='Beach Name' title={this.state.items[4].spot_name} county={this.state.items[4].county_name} spot_id={this.state.items[4].spot_id} />
            </div>
          </div>

        </div>


        <div className='container-fluid d-flex justify-content-center'>
          <div className='row'>
            <div className='col-md-2'>
              <Cards title6='Beach Name' title={this.state.items[5].spot_name} county={this.state.items[5].county_name} spot_id={this.state.items[5].spot_id} />
            </div>
            <div className='col-md-2'>
              <Cards title7='Beach Name' title={this.state.items[6].spot_name} county={this.state.items[6].county_name} spot_id={this.state.items[6].spot_id} />
            </div>
            <div className='col-md-2'>
              <Cards title8='Beach Name' title={this.state.items[7].spot_name} county={this.state.items[7].county_name} spot_id={this.state.items[7].spot_id} />
            </div>
            <div className='col-md-2'>
              <Cards title9='Beach Name' title={this.state.items[8].spot_name} county={this.state.items[8].county_name} spot_id={this.state.items[8].spot_id} />
            </div>
            <div className='col-md-2'>
              <Cards title0='Beach Name' title={this.state.items[9].spot_name} county={this.state.items[9].county_name} spot_id={this.state.items[9].spot_id} />
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default Cards;