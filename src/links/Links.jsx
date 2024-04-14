import React from "react";
import { NavLink } from "react-router-dom";
import "./Link.css"

const Links = ({label, to, icon})=>{
    
    return(

        <NavLink id="lnk" to={to}>
            <span>{icon}</span>
            <span>{label}</span>
        </NavLink>
    )
}


export default Links