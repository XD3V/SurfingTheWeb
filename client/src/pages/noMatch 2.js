import React from "react";
import { Link } from 'react-router-dom';

const NotFound = () => (
<div>
<center><h1 style={{padding: 5, margin: 5}}>Oops!</h1></center>
<center><h2 style={{padding: 5, margin: 5}}>404 - Page Not Found</h2></center>
<center><h2>¯\_(ツ)_/¯</h2></center>
<center><h2><button style={{padding: 10, margin: 18, borderRadius: 4, borderWidth: 2, borderColor: '#fff', fontSize: 16}}><Link to="/">Return to Home Page</Link></button></h2></center>
</div>
);
export default NotFound;