import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
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
            }
        ]
    }
])

export default routes