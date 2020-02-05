import React, {Component} from 'react';
// import {Navbar} from 'react-bootstrap';
import Axios from "axios";
import {Card} from "../components/Card/index";  

class laJolla extends Component{
    state={ 
        data: []

    }
    //logic goes here


    componentDidMount(){
        //api axios goes here//
        Axios.get("https://tidesandcurrents.noaa.gov//api/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&date=today&datum=MLLW&station=9410230&time_zone=lst_ldt&units=english&interval=hilo&format=json")
        .then(result => {
            let items_array1 = []
            let items_array2 = []
            let items_array3 = []
            console.log(result);
            console.log(result.data.predictions[1].t);
            // console.log(result.data[0].shape_detail);
            // console.log(result.data[0].shape_detail.swell);
             //this.setState({data: data[0].shape_detail});
            
        // })
        // //send api info into state. //
        // //proper syntax for setState//
        // //this.state.setState({data:result})

        // for (let i = 0; i < 4; i++) {
            //  if (this.pre_approved_spots.includes(json.stations[i]))
  
            //console.log('response is', result.data.predictions[i])
            let newObj = {
              time: result.data.predictions[1].t,
              height:  result.data.predictions[1].type,
             type: result.data.predictions[1].v,
            }
             console.log(newObj.type)
  
            items_array1.push(newObj.time)
            items_array2.push(newObj.height)
            items_array3.push(newObj.type)
            // console.log("total items pushed", items_array.length)
            // console.log(items_array)
  
            this.setState({
               item1: newObj.time,
               item2: newObj.height,
               item3: newObj.type,
              isLoaded: true,
            
  
  
        //   } //}
        
  
        })})
    }
    render(){
        console.log(this.state.item2)
        return(
            // <Cards title={this.state.data.spot_name}>
            //     <p>Beach info</p>
            // </Cards>
            <Card 
             title="La Jolla"
              time={this.state.item1}
              type={this.state.item2}
              height={this.state.item3}
            // time={this.state.data.predictions[1]}
            // wind={this.state.data.wind}
            />

        );
    }
    }
export default laJolla