import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Hero from './components/HERO/Hero.jsx'
import Models from './components/Models/Models.jsx'
import Social from './components/Social/Social.jsx'
import Login from './components/Login/Login.jsx'
import Signin from './components/Signin/Signin.jsx'

// const router = createBrowserRouter([
//     {
//       path:'/',
//       element: <App/>,
//       children: [
//         {
//           path:"",
//           element: <Hero/>
//         },
//         {
//           path:"Models",
//           element: <Models/>
//         }
//       ]
//     }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<App/>} >
        <Route path='/' element={<Hero/>} />
        <Route path='Models' element={<Models/>} />
        <Route path='Social' element={<Social/>} />
        <Route path='Login' element={<Login/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
