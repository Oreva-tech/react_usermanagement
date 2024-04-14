import React from "react";
import Links from "../links/Links";
import { AiFillSetting, AiOutlineLogin, AiOutlineUser, AiOutlineHome } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import "./SIdebar.css"


const Sidebar =()=> {

    const path =[
        {
            to:"/setting", label:"Setting", icon:<AiFillSetting/>
        },

        {
            to:"/admin", label:"Admin", icon:<MdOutlineAdminPanelSettings/>
        },


        {
            to:"/users", label:"Users", icon:<AiOutlineUser/>
        },

        {
            to:"/home", label:"Home", icon:<AiOutlineHome/>

        },
    ]


    return(
        <div className="side"> 

            {

                path.map(({to,label,icon}) =>(

                    <Links key ={label} to={to}  label={label} icon={icon}/>

                )
            )
            }
        </div>
    )
}


export default Sidebar