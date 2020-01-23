import React, { Component } from 'react';
import './style.css';

export const Card = props => {
    return (
      <div className='card text-center shadow'>
       
        <div className='card-body text-dark'>
          <h4 className='card-title'>{props.title}</h4>
          <p className='card-text text-secondary'>
            Description
          </p>
          <a href='#' className='btn btn-outline-success'>
            Go To Beach
          </a>
        </div>
      </div>
    );
  };

export const Cards = props => {
    return (
      <div className='container-fluid d-flex justify-content-center'>
        <div className='row'>
          <div className='col-md-4'>
            <Card title='Beach Name' />
          </div>
          <div className='col-md-4'>
            <Card title='Beach 2' />
          </div>
          <div className='col-md-4'>
            <Card title='Beach 3' />
          </div>
        </div>
      </div>
    );
  };
   
//   export default Card;