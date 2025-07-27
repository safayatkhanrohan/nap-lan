import { createBrowserRouter } from 'react-router';
import Dashboard from '../dashboard/pages/Dashboard';
import Test from '../dashboard/pages/Test';
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import FAQ from "../pages/FAQ";
import ForSchool from "../pages/For school";
import Home from "../pages/homepage";
import HowItWorks from "../pages/how-it-works";
import Login from "../pages/login";
import PricingPlan from "../pages/pricing-plan";
import Register from "../pages/register";

const router = createBrowserRouter([
     {
          path: "/",
          element: <Main />,
          children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/how-it-works",
                element: <HowItWorks />
            },
            {
                path: "/pricing",
                element: <PricingPlan />
            },
            {
                path: "/faq",
                element: <FAQ />
            },
            {
                path: "/for-schools",
                element: <ForSchool />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
          ]
     },
     {
        path:'/dashboard',
        element:<DashboardLayout/>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard/>, 
            },
            {
                path:'/dashboard/test',
                element:<Test/>, 
            },
        ]
     }
]);

export default router;
