import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Loginpage from './pages/Loginpage';
import Register from './pages/Register';

const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<h1>404! Not Found</h1>,
        children:[
            {
                path:"/home",
                element:<Home/>

            }
        ]

    },
    {
        path:"/login",
        element:<Loginpage/>
    },
    {
        path:"/register",
        element:<Register/>
    }
])

export default router;