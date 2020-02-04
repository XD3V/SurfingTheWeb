// import React from "react";
// import styled from 'styled-components'
// import Navlinks from './Navlinks'
// import { Link } from 'react-router-dom'
// import mobileNavIcon from '../../images/mobile-nav-icon.svg'

// const MyDesktopNavbar = styled.nav`
// display: flex;
// flex-flow: row nowrap;
// justify-content: space-evenly;
// align-items: center;

// background: ${ props => props.theme.primary };


// height: 9vh;
// /* box-shadow: -2px 6px 10px 2px ${ props => props.theme.accent }; */

// .logo {
//     font-size: 3rem;
//     text-shadow: 3px 3px 3px ${ props => props.theme.accent };;
//     text-align: center;
//     align-items: flex-start;
//     text-decoration: none;
//     padding-inline-start: 0px;

// }
// box-shadow: -10px 10px 5px #101820;

// }
// .nav-links{
//     display: flex;
//     flex-flow: right;
//     justify-content: flex-end;
//     align-items: flex-start;
//     width: 75vw;
//     list-style: none;
//     float: right;

//     @media screen and (max-width : 768px) {
//         display: none;
//     }
// }

// .link {
//     display: flex;
//     flex-flow: column nowrap;
//     justify-content: center;
//     align-items: center;
//     flex-grow: 100;

//     height: 7vh;

//     color: white;
//     padding: 0 1rem;
//     font-size: 2.5vh;
//     text-decoration: none;
//     border-radius: 10px;

//     &:focus { 
//         background: rgba(0, 0, 0, 0.1);
//         outline: none;
//     }
//     &::after {
//         content: '';
//         height: 2px;
//         width: 2px;
//         background: white;
//         display: block;
//         transition: width 0.7s;
//     }
//     &:hover::after{
//         transform: width;
//         width:125%;
//     }
// }
// `
// // END DESKTOP NAVBAR

// // START MyMobileNavBar
// const MyMobileNavButton = styled.button `
//     background: transparent;
//     height: 6vh;
//     width: 6vh;
//     border: none;
//     display: none;


//     transition: transform 1s ease-in-out;
//     transform: rotate(${ props => props.displayMobileNavbar ? ("540deg") : ("0deg") });
   
//     &:focus {
//         outline: none;
//     }
//     @media screen and (max-width : 768px) {
//         display: block;
//     }

// `
// // END MyMobileNavButton

// // DesktopNavBar
// const DesktopNavbar = props => {
//     console.log("Desktop");
//     return ( 
//         <MyDesktopNavbar>
//              <Link to= "/" className="link">

//             <div className="logo"> WebSurfing </div> </Link>
        
//             <Navlinks />

//                 <MyMobileNavButton
                    
//                     displayMobileNavbar = { props.displayMobileNavbar }
//                     onClick = { props.toggleMobileNavbar }
//                 >
//                     <img src={ mobileNavIcon } alt="Can You Handle The Slopes?" />
//                 </MyMobileNavButton>
//         </MyDesktopNavbar>
//     )
// };

// export default DesktopNavbar
