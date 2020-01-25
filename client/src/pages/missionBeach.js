import React, { Component } from 'react';
// import {Navbar} from 'react-bootstrap';
import Axios from "axios";
import { Card } from "../components/Card/index";

class details extends Component {
    state = {
        data: []

    }
    //logic goes here


    componentDidMount() {
        //api axios goes here//
        Axios.get("http://api.spitcast.com/api/spot/forecast/397/")
            .then(result => {
                console.log(result);
                console.log(result.data[0]);
                console.log(result.data[0].shape_detail);
                console.log(result.data[0].shape_detail.swell);
                this.setState({ data: result.data[0].shape_detail });

            })
        //send api info into state. //
        //proper syntax for setState//
        // this.state.setState({data:result})

    }
    render() {
        return (
            // <Cards title={this.state.data.spot_name}>
            //     <p>Beach info</p>
            // </Cards>
            <div>
                <div>
                    <Card
                        title="Mission Beach"
                        swell={this.state.data.swell}
                        tide={this.state.data.tide}
                        wind={this.state.data.wind}
                    />
                </div>
                <div>
                <iframe
                    allowFullScreen
                    webkitallowfullscreen
                    mozallowfullscreen
                    src="https://video.nest.com/embedded/live/Zp83ptXCn3?autoplay=0"
                    frameBorder={0}
                    width={720}
                    height={576}
                />;
                </div>
            </div>

        );
    }
}
export default details