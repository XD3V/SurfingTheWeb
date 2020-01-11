import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'


export default class App extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <Navbar />
             </BrowserRouter>
        )
    }
}


