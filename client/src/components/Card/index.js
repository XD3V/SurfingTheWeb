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


// export const Card = props => {
//   return (
//     <div className='card text-center shadow'>

//       <div className='card-body text-dark'>
//         <h4 className='card-title'>{props.title}</h4>
//         <p className='card-text text-secondary'>
//           {props.county}
//         </p>
//         <a href={'/home/detail/' + props.spot_id} className='btn btn-outline-success'>
//           Go To Beach
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Card;
export default Cards;