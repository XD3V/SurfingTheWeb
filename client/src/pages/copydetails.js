import React, {Component} from 'react';
// import {Navbar} from 'react-bootstrap';
import Axios from "axios";
import Card from "../components/Card";  

class details extends Component{
    state={ 
        data: []

    }
    //logic goes here


    componentDidMount(){
        //api axios goes here//
        Axios.get("http://api.spitcast.com/api/spot/forecast/397/")
        .then(result => {
            console.log(result);
            console.log(result.data[0]);
            this.setState({data: result.data[0]});
        })
        //send api info into state. //
        //proper syntax for setState//
        // this.state.setState({data:result})

    }
    render(){
        return(
            <Card title={this.state.data.spot_name}>
                <p>Beach info</p>
            </Card>

        );
    }
}
export default details