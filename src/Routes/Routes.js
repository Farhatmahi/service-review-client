import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
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
            }
        ]
    }
])

export default routes