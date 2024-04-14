import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout"; 
import Login from "./pages/Login";
import Users from "./pages/Users";
import Admin from "./pages/Admin";
import Setting from "./pages/Setting";
import Home from "./pages/Home";





const router = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout/>,
        children: [
            {
                index:true,
                element:<Login/>
            },

            {
                path:"/users",
                element:<Users/>
            },

            {
                path:"/admin",
                element:<Admin/>
            },

            {
                path:"/setting",
                element:<Setting/>
            },


            {
                path:"/home",
                element:<Home/>
            },

            {
                path:"*",
                element:"Page does not exist"
            }


        ]
    }
])


export default router