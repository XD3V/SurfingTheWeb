import React, { Component } from "react";
import M from 'materialize-css';
import './navStyle.css';
import logo from "../../images/surfboard.png"
import register from '../../pages/register'
import login from '../../pages/login'
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});


class NavBar extends Component {
  render() {
    if(login)
    return (

        <nav>
        <div class="nav-wrapper">
          <a href="/" img src={logo} class="brand-logo" >WebSurfing</a>
          

          <a href="/" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li><a href="/home/register">Sign Up</a></li>
            <li><a href="/home/login">Log In</a></li>
            <li><a href="/home/detail">My Beach Spots</a></li>
            {/* <li><a href="/home/logout">Log Out</a></li>             */}
          </ul>
        </div>
      
      <ul id="slide-out" class="sidenav">
            <li><a href="/home/register">Sign Up</a></li>
            <li><a href="/home/login">Log In</a></li>
            <li><a href="/home/detail">My Beach Spots</a></li>
            {/* <li><a href="/home/logout">Log Out</a></li>     */}
      </ul>
      </nav>
      
    );

    return(
      <nav>
      <div class="nav-wrapper">
        <a href="/" img src={logo} class="brand-logo" >WebSurfing</a>
        

        <a href="/" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
          {/* <li><a href="/home/register">Sign Up</a></li> */}
          {/* <li><a href="/home/login">Log In</a></li> */}
          <li><a href="/home/detail">My Beach Spots</a></li>
          <li><a href="/home/logout">Log Out</a></li>            
        </ul>
      </div>
    
    <ul id="slide-out" class="sidenav">
          {/* <li><a href="/home/register">Sign Up</a></li> */}
          {/* <li><a href="/home/login">Log In</a></li> */}
          <li><a href="/home/detail">My Beach Spots</a></li>
          <li><a href="/home/logout">Log Out</a></li>    
    </ul>
    </nav>


    )
  }
}
 
export default NavBar;