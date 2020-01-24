import React, { Component } from "react";
import {Card} from './index';
import './style.css';
import Cards from './Cards'


// these are the cards of the respective different beaches

class detailCard extends Component {

  constructor(props) {
   
    super(props)
    this.state = {
      items: [],
      isLoaded: false
      
    }
  }

  // pre approved spots array 
  pre_approved_spots = [397, 638, 1, 10, 200, 201, 202, 203, 204, 205]

  // component was mounted
  componentDidMount() {
// grabs the url id
// let id = window.location.href;
// console.log(id.match(/[0-9]/));

    // console.log('going to fetch now')
    // // pre-fetch data to populate UI before it is rendered
    // fetch('/proxy/spot/forecast/'+id.match(/[0-9]/)+'/')
    //   .then(res => res.json())
    //   .then(json => {

  // 
      //var approved_spots = this.pre_approved_spots.includes(json[i].spot_id);
    // pre-fetch data to populate UI before it is rendered
    fetch('/proxy/spot/forecast/'+props.propsName+'/')
      .then(res => res.json())
      .then(json => {
        let items_array = []

        for (let i = 0; i < json.length; i++) {

          if (this.pre_approved_spots.includes(json[i].spot_id)) {
            let newObj = {
              spot_name: json[i].spot_name,
              spot_id: json[i].shape_detail.wind,
              swell: json[i].lonngitude,
              wind: json[i].shape_detail.wind,
              tide: json[i].shape_detail.tide
            }
            items_array.push(newObj)
            console.log(json[i])
          } else {
            // ignore this spot 
          }


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
      })
  };




  render() {

    // beaches are still loading from API
    if (this.state.items.length == 0) {
      return (
        <div className='container-fluid d-flex justify-content-center'>
          <div className='row'>
            <div className='col-md-4'>
              <Card title='Beach Name' title={
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


        <div className='container-fluid d-flex justify-content-center'>

          <div className='row'>
            <div className='col-md-2'>
              <Card title='Beach Name' title={this.state.items[0].spot_name} spot_id={this.state.items[0].spot_id}
              swell={this.state.items[0].shape_detail.swell} tide={this.state.items[0].shape_detail.tide} wind={this.state.items[0].shape_detail.wind} />
            </div>
            <div className='col-md-2'>
              <Card title='Beach Name' title={this.state.items[1].spot_name} county={this.state.items[1].county_name} spot_id={this.state.items[1].spot_id} />
            </div>
            <div className='col-md-2'>
              <Card title='Beach Name' title={this.state.items[2].spot_name} county={this.state.items[2].county_name} spot_id={this.state.items[2].spot_id} />
            </div>
            <div className='col-md-2'>
              <Card title='Beach Name' title={this.state.items[3].spot_name} county={this.state.items[3].county_name} spot_id={this.state.items[3].spot_id} />
            </div>
            <div className='col-md-2'>
              <Card title='Beach Name' title={this.state.items[4].spot_name} county={this.state.items[4].county_name} spot_id={this.state.items[4].spot_id} />
            </div>
          </div>

        </div>


        <div className='container-fluid d-flex justify-content-center'>
          <div className='row'>
            <div className='col-md-2'>
              <Card title='Beach Name' title={this.state.items[5].spot_name} county={this.state.items[5].county_name} spot_id={this.state.items[5].spot_id} />
            </div>
            <div className='col-md-2'>
              <Card title='Beach Name' title={this.state.items[6].spot_name} county={this.state.items[6].county_name} spot_id={this.state.items[6].spot_id} />
            </div>
            <div className='col-md-2'>
              <Card title='Beach Name' title={this.state.items[7].spot_name} county={this.state.items[7].county_name} spot_id={this.state.items[7].spot_id} />
            </div>
            <div className='col-md-2'>
              <Card title='Beach Name' title={this.state.items[8].spot_name} county={this.state.items[8].county_name} spot_id={this.state.items[8].spot_id} />
            </div>
            <div className='col-md-2'>
              <Card title='Beach Name' title={this.state.items[9].spot_name} county={this.state.items[9].county_name} spot_id={this.state.items[9].spot_id} />
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default detailCard;