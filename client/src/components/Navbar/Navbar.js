import React, { Component } from "react";
import DesktopNavBar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'
import styled from 'styled-components'

// parent component of desktop and mobile navbar
const MyNavbar = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    overflow-x: hidden;
`
// Root component of the entire navbar 
export default class Navbar extends Component {

    state = {
        displayMobileNavbar: true
    }

    toggleMobileNavbar = () => {
        // this.setState( prevState => {
        //     console.log(prevState);
        //     return { displayMobileNavbar: !prevState.displayMobileNavbar }
        // })

        // console.log(this.state)
        console.log(this.state);
        this.setState({
            displayMobileNavbar: !this.state.displayMobileNavbar
        });
        console.log(this.state);
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.checkAndAutoHideMobileNavbar)
    }

    componentWillMount = () => {
        window.removeEventListener('resize', this.checkAndAutoHideMobileNavbar)
    }

    checkAndAutoHideMobileNavbar = () => {
        const screenWidth = window.innerWidth

        if (this.state.displayMobileNavbar && screenWidth > 768) {
            this.setState({
                displayMobileNavbar: false
            })
        }
    }
    
    render() {
        return (
            <MyNavbar>
                <DesktopNavBar toggleMobileNavbar = { this.toggleMobileNavbar }/>
                <MobileNavbar displayMobileNavbar = { this.state.displayMobileNavbar} />
            </MyNavbar>
        );
    }
}
