import React, { Component } from "react";
import Card from './index';
import './style.css';

class Cards extends Component {
  render() {
    return (
      <div className='container-fluid d-flex justify-content-center'>
        {/* <div className='row'>
          <div className='col-md-4'>
            <Card title='Beach Name' />
          </div>
          <div className='col-md-4'>
            <Card title='Beach 2' />
          </div>
          <div className='col-md-4'>
            <Card title='Beach 3' />
          </div>
        </div> */}
      </div>
    );
  }
}
 
export default Cards;