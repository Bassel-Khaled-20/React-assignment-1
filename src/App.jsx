import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About/About'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Protfolio from './components/portfolio/Protfolio';
import Contact from './components/Contact/Contact';
import StartFramework from './components/Start-Framework/StartFramework'
import NotF from './components/NotF/NotF'
let x=createBrowserRouter([
  {path: "", element: <Layout />,children:[
    {index: true, element: <StartFramework />},
    {path: "About", element: <About />},
    {path: "Contact", element: <Contact />},
    {path: "Protfolio", element: <Protfolio />},
    {path: "*", element: <NotF/>}
  ]}
])



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <RouterProvider router={x}></RouterProvider>

 
    </>
  )
}

export default App
