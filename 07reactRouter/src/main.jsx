import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Home, About, Contact, User, Github } from './components/index.js'
import { githubInfoLoader } from './components/Github.jsx'

/*const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [{
    path: "",
    element: <Home />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "contact",
    element: <Contact />
  },]

}])*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>//yha pe hmne element mein App dala hai mtlb k app mein jse hmne likha hai vse hoga, Header or Footer same rahenge, baki ye pages chnge hote rahenge.
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />

      <Route path="user/:id" element={<User />} />



    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
