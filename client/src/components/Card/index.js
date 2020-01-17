import React, { Component } from 'react';
import './style.css';

const Card = props => {
    return (

        <div>
            <div className="card">
        <h3 className='card-title'>{props.title}</h3>
    <p className='card-text'>
    Count 
        </p>
        <p>Size</p>
        <p>Tide</p>
    </div>
    </div>
    );
    
};

export default Card;