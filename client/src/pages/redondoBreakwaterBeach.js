import React, {Component} from 'react';
// import {Navbar} from 'react-bootstrap';
import Axios from "axios";
import {Card} from "../components/Card/index";  

class details extends Component{
    state={ 
        data: []

    }
    //logic goes here


    componentDidMount(){
        //api axios goes here//
        Axios.get("http://api.spitcast.com/api/spot/forecast/201/")
        .then(result => {
            console.log(result);
            console.log(result.data[0]);
            console.log(result.data[0].shape_detail);
            console.log(result.data[0].shape_detail.swell);
            this.setState({data: result.data[0].shape_detail});
            
        })
        //send api info into state. //
        //proper syntax for setState//
        // this.state.setState({data:result})

    }
    render(){
        return(
            // <Cards title={this.state.data.spot_name}>
            //     <p>Beach info</p>
            // </Cards>
            <Card 
            title="Rendondo Breakwater"
            swell={this.state.data.swell}
            tide={this.state.data.tide}
            wind={this.state.data.wind}
            />

        );
    }
}
export default details