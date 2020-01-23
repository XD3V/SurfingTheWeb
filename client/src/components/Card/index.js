import React, { Component } from 'react';
import './style.css';

const Card = props => {
  return (
    <div className='container-fluid d-flex justify-content-center'>
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
    </div>
  );
};

export default Card;