import React from "react";
import { Link } from "react-router-dom";

const Navigation=()=>{
	return (
	<div>
        <nav>
            <h3> logo</h3>
            <ul>
                <Link to ='/keys'>
                <li>keys</li>
                </Link>
                
            </ul>
        </nav>
	</div>
	)
}
export default Navigation;