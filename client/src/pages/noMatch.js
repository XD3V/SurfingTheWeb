import React from "react";
import { Link } from 'react-router-dom';

const NotFound = () => (
<div style={{margin: 'auto', marginTop: 0}}>
<center><h1>Oops!</h1></center>
<center><h2>404 - Page Not Found</h2></center>
<center><h2>¯\_(ツ)_/¯</h2></center>
<h2><button style={{padding: 10, margin: 18, borderRadius: 4, borderWidth: 2, borderColor: '#fff', fontSize: 16}}><Link to="/">Return to Home Page</Link></button></h2>
</div>
);
export default NotFound;