
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main/Main';
import Blog from '../pages/Blog/Blog';
import Courses from '../pages/Courses/Courses';
import FAQ from '../pages/FAQ/FAQ';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';


  export  const route= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {path:'/',
            loader:()=>{
                return fetch('http://localhost:5000/data')  
            },
            element:<Home></Home>

        },
        {
            path:'/courses',
            element:<Courses></Courses>
        },
        {
            path:'/FAQ',
            element:<FAQ></FAQ>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },


        ]
    }
  ])

