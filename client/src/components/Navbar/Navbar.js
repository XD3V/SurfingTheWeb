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
    /* box-shadow: 1px 9px 14px 2px #101820; */
    
}

    
`
// Root component of the entire navbar 
class Navbar extends Component {

    state = {
        displayMobileNavbar: false
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.checkAndAutoHideMobileNavbar)
    }

    componentWillMount = () => {
        window.removeEventListener('resize', this.checkAndAutoHideMobileNavbar)
    }

    toggleMobileNavbar = () => {
        console.log("Change mobile");
        this.setState( prevState => {
            console.log(prevState);
            return { displayMobileNavbar: !prevState.displayMobileNavbar }
        }) 
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
                <DesktopNavBar 
                displayMobileNavbar = { this.state.displayMobileNavbar}
                toggleMobileNavbar = { this.toggleMobileNavbar } />
                <MobileNavbar displayMobileNavbar = { this.state.displayMobileNavbar} />
            </MyNavbar>
        );
    }
}

export default Navbar
