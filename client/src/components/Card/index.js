import React, { Component } from 'react';
import './style.css';

export const Cards = props => {
  return (
    <div className='card text-center shadow'>

      <div className='card-body text-dark'>
        <h4 className='card-title'>{props.title}</h4>
        <p className='card-text text-secondary'>
          {props.county}
        </p>
        <a href={'/home/detail/' + props.spot_id} className='btn btn-outline-success'>
          Go To Beach
          </a>
          
      </div>
    </div>
  );
};


export const Card = props => {
  return (
    <div className='card text-center shadow'>

      <div className='card-body text-dark'>
        {/* <Forecast propsName={this.state.items[0].spotId} /> */}
        <h4 className='card-title'>{props.title}</h4>
        <p className='card-text text-secondary'>
          Swell:{props.swell}
        </p>
        <p className='card-text text-secondary'>
          Tide:{props.tide}
        </p>
        <p className='card-text text-secondary'>
          Wind:{props.wind}
        </p>
      </div>
    </div>
  );
};

// export default {
//   Card,
//   Cards
// };