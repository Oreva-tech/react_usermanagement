import React, {useContext} from "react"
import {formContext} from "../UserContext"


const Users =()=>{

    const {createUser} =useContext(formContext)


    return(

        <>

        <div>
        <h1>User page</h1>
        </div>

        <div>
        <pre>{JSON.stringify(createUser)}</pre>
        </div>

        
        
        
        </>
    )
}


export default Users 