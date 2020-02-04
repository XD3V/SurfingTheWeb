import React from 'react';
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
//     <div className='picky'>
//       <div className='card text-center shadow'>

//         <div className='card-body text-dark'>
//           <h1 className='card-title'>{props.title}</h1>

//           <h4 className='card-title'>Tide:{props.tide}</h4>
//           <h4 className='card-title'>Swell:{props.swell}</h4>
//           <h4 className='card-title'>Wind:{props.wind}</h4>




//           {/* <h4 className='card-title'>{props.title}</h4>
//         <p className='card-text text-secondary'>
//           Swell:{props.swell}
//         </p>
//         <p className='card-text text-secondary'>
//           Tide:{props.tide}
//         </p>
//         <p className='card-text text-secondary'>
//           Wind:{props.wind}
//         </p> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default {
//   Card,
//   Cards
// };