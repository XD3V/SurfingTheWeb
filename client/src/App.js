import React from 'react';

class App extends React.Component {

    
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false,
            currentSpot : null,
            viewSpot    : false,
            
        }

    }

    // component was mounted
    componentDidMount() {

        console.log('going to fetch now')
        // pre-fetch data to populate UI before it is rendered
        fetch('/proxy/spot/all')
            .then(res => res.json())
            .then(json => {
                console.log('response is', json)
                this.setState({
                    items: json,
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
                
                this.setState({
                    currentSpot : json,
                    viewSpot    : true
                })
                
            }).catch( (err) => {
                console.log("Failed to fetch spot", err)
            })
    }

    renderSpot(spot){
        if(spot.error){
            return (
                <div>
                    <h1> { spot.error_likely } </h1>
                </div>
            )
        }
        
        return(
            <div>
                <h1> VIEW SPOT </h1>
                <h1
                    onClick={ (e) => {
                        this.setState({
                            viewSpot : false
                        })
                    }}
                > BACK BUTTON </h1>
                {spot.id}
            </div>
        )
    }

    
        
    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded) return <div>Loading...</div>;

        if(this.state.viewSpot) {
            return this.renderSpot(this.state.currentSpot)
        }

        return (
            <div className="App">
                <ul>

                    {items.map(item => (

                        <li 
                            key={item.id}
                            onClick={(e) => {
                                console.log( item.spot_id ) 
                                this.getSpot(item.spot_id)
                                                              
                            }}
                            >
                            Size: {item.size} | Name: {item.spot_name} | County: {item.county_name} 
                        </li>

                    ))}
                </ul>
            </div>
        );

    }

}

export default App;
