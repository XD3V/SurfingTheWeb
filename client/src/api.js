import React from 'react';

class api extends React.Component {

    
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false,
            currentSpot : null,
            viewSpot    : false,
            
        }

    }

    // this is a change

    pre_approved_spots = [397, 638, 1, 10, 200, 201, 202, 203, 204, 205]

    // component was mounted
    componentDidMount() {

        console.log('going to fetch now')
        // pre-fetch data to populate UI before it is rendered
        fetch('/proxy/spot/all')
            .then(res => res.json())
            .then(json => {

                let items_array = []

                for(let i = 0; i < json.length; i++ ){
                    
                    if( this.pre_approved_spots.includes( json[i].spot_id ) ){
                        let newObj = {
                            county_name : json[i].county_name,
                            latitude    : json[i].latitude,
                            lonngitude  : json[i].lonngitude,
                            spot_id     : json[i].spot_id,
                            spot_name   : json[i].spot_name
                        }
                        items_array.push(newObj)
                        console.log(json[i])
                    } else {
                        // ignore this spot 
                    }
                    

                }

                console.log("total items pushed", items_array.length)
                console.log(items_array)

                console.log('response is', json)
                this.setState({
                    items: items_array,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });
    };

    // creating a function to return a single spot by the id 
    getSpot(spot_id){
        fetch('/proxy/spot/' + spot_id)
            .then( res => res.json())
            .then( json => {

                console.log(json)
                this.setState({
                    viewSpot    : true,
                    currentSpot : json[0]
                })
                

            }).catch( (err) => {
                console.log("Failed to fetch spot", err)
            })
    }

    renderSpot(s){

       
        if(!this.state.currentSpot){ return <div></div>}
        if(this.state.currentSpot.error){
            return (
                <div>
                    <h1> { this.state.currentSpot.error_likely } </h1>
                </div>
            )
        }
        
        Object.keys(this.state.currentSpot).map( (key) => {
            console.log(key)
        })
        
        return(
            <div>
                <h1> VIEW SPOT </h1>
                <p> `Date : ${this.state.currentSpot.date}` </p>
                <p> `Day  : ${this.state.currentSpot.day}` </p>
                <p> `GMT : ${this.state.currentSpot.gmt}` </p>
                <p> `hour : ${this.state.currentSpot.hour}` </p>
                <p> `latitude : ${this.state.currentSpot.latitude}` </p>
                <p> `lonngitude : ${this.state.currentSpot.lonngitude}` </p>
                <p> `shape : ${this.state.currentSpot.shape}` </p>
                <p> `shape_detail : ${this.state.currentSpot.shape_detail.toString()}` </p>
                <p> `shape_full : ${this.state.currentSpot.shape_full}` </p>
                <p> `size : ${this.state.currentSpot.size}` </p>
                <p> `size in feet : ${this.state.currentSpot.size_ft}` </p>
                <p> `spot id : ${this.state.currentSpot.spot_id}` </p>
                <p> `spot name : ${this.state.currentSpot.spot_name}` </p>
                <p> `warnings : ${this.state.currentSpot.warnings.toString()}` </p>


                <h1
                    onClick={ (e) => {
                        this.setState({
                            viewSpot : false
                        })
                    }}
                > BACK BUTTON </h1>
                
            </div>
        )
    }

    
        
    render() {



        if (!this.state.isLoaded) return <div>Loading...</div>;

        if(this.state.viewSpot) {
            return this.renderSpot(this.state.currentSpot)
        }

        return (
            <div className="App">
                <ul>

                    {this.state.items.map(item => {

                        console.log( "CURRENT ITEM IS", item )
                        return (
                            <li 
                                key={item.spot_id}
                                onClick={(e) => {
                                    console.log( item.spot_id ) 
                                    this.getSpot(item.spot_id)
                                                              
                                }}
                            >
                            Name: {item.spot_name} | County: {item.county_name} 
                        </li>
                        )
                    })}
                </ul>
            </div>
        );

    }

}

export default api;