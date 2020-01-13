import React from "react";
import styled from 'styled-components'
import Navlinks from './Navlinks'
import mobileNavIcon from '../../images/mobile-nav-icon.svg'

// START desktop navbar
const MyDesktopNavbar = styled.nav`
display: flex;
flex-flow: row nowrap;
justify-content: space-evenly;
align-items: center;
background: ${ props => props.theme.primary };
color: white;
height: 15vh;
box-shadow: -10px 10px 5px ${ props => props.theme.accent };
.logo {
    font-size: 7vh;
    text-shadow: 3px 3px 3px ${ props => props.theme.accent };;
}
.nav-links{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    width: 35vw;
    list-style: none;
    @media screen and (max-width : 768px) {
        display: none;
    }
}

.link {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 15vh;
    color: white;
    padding: 0 1rem;
    font-size: 2.5vh;
    text-decoration: none;
    border-radius: 10px;
    &:focus { 
        background: rgba(0, 0, 0, 0.1);
        outline: none;
    }
    &::after {
        content: '';
        height: 2px;
        width: 0px;
        background: white;
        display: block;
        transition: width 0.5s;
    }
    &:hover::after{
        transform: width;
        width:125%;
    }
}
`
// END DESKTOP NAVBAR

// START MyMobileNavBar
const MyMobileNavButton = styled.button `
    background: transparent;
    height: 6vh;
    width: 6vh;
    border: none;
    display: none;
    transition: transform 1s ease-in-out;
    transform: rotate(${ props => props.displayMobileNavbar ? ("540deg") : ("0deg") });
    &:focus {
        outline: none;
    }
    @media screen and (max-width : 768px) {
        display: block;
    }

`
// END MyMobileNavButton

// DesktopNavBar
const DesktopNavbar = props => {
    console.log("Desktop");
    return ( 
        <MyDesktopNavbar>
            <div className="logo"> WebSurfing </div>
            <Navlinks />
                <MyMobileNavButton
                    onClick = { () => {
                        console.log("HELLO WORLD")
                        console.log(props)
                        props.toggleMobileNavbar()   
                    }}
                    displayMobileNavbar = { props.displayMobileNavbar }
                >
                    <img src={ mobileNavIcon } alt="Can You Handle The Slopes?" />
                </MyMobileNavButton>
        </MyDesktopNavbar>
    )
};

export default DesktopNavbar
