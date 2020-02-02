 import React, { Component } from "react";
 import Cards from "../components/Card/Cards";
 import{ api} from "../api";


 class Home extends Component {
   render() {
     return (
         <Cards
         api
         />
     );
   }
 }

 export default Home;