import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import About from './component/About/About.jsx';
import Contact from './component/Contact/Contact.jsx';
import Users from './component/Users/Users.jsx';
import UserDitils from './component/User-DItils/UserDitils.jsx';
import Posts from './component/Posts/Posts.jsx';
import PostDitils from './component/PostDitils/PostDitils.jsx';
import ErrorPage from './component/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/users',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/user/:userId',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDitils></UserDitils>
      },
      {
        path:'/posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:'/post/:postId',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDitils></PostDitils>
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
