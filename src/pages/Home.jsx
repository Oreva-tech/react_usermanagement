import React, {useContext, useState} from "react";
import {formContext} from "../UserContext" 


const Home =()=>{
    const {createUser} =useContext(formContext)


    return(

        <div>
            Number of Users:{createUser.length}

        </div>
    )
    
}



export default Home