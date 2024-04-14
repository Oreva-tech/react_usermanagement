import React from "react";
import {Outlet} from 'react-router-dom'
import Sidebar from "../navlinks/Sidebar"; 
import "./Mianlayout.css" 


const Mainlayout =()=>{


    return(

        <div className="cont">

            <div id="sidebar">
            <Sidebar/>

            </div>

            <div id="display">
                <Outlet/>
            </div>
            
        </div>

        



            
    )
}

export default Mainlayout