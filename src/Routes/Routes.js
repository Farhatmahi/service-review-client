import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";

const routes = createBrowserRouter([
    {
        path : '/',
        element : <Main />,
        children : [
            {
                path : '/',
                element : <Home />
            },
            {
                path : '/services',
                element : <Services />
            },
            {
                path : '/services/:id',
                element : <ServiceDetails />,
                loader : ({params}) => fetch(`http://localhost:5001/services/${params.id}`)
            },
            {
                path : '/login',
                element : <Login />
            },
            {
                path : '/register',
                element : <Register />
            },
            {
                path : '/blogs',
                element : <Blogs />,
                loader : () => fetch('http://localhost:5001/blogs')
            }
        ]
    }
])

export default routes