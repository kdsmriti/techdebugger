import {createBrowserRouter,RouterProvider
} from "react-router-dom";
import './App.css'
import Courses from "./Components/Pages/Courses";
import Gallery from"./Components/Pages/Gallery";
import Login from "./Components/Pages/Login";
import Notes from "./Components/Pages/Notes";
import Ourservices from "./Components/Pages/OurServices";
import Scholarships from "./Components/Pages/Scholarships";
import SignUp from "./Components/Pages/SignUp";
import Layout from "./Components/Layout";
import Home from "./Components/Pages/Home";
import ContactUs from "./Components/Pages/ContactUs";


const router = createBrowserRouter([
  {path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:(
        <div>
         <Home/>
          </div>
        )
    },
    {
      path:"/courses",
        element:(
        <div>
          <Courses/>
          </div>
        )
    },
    {
      path:"/gallery",
        element:(
        <div>
          <Gallery/>
          </div>
        )
    },
    {
      path:"/notes",
        element:(
        <div>
          <Notes/>
          </div>
        )
    },
    {
      path:"/ourservices",
        element:(
        <div>
          <Ourservices/>
          </div>
        )
    },
    {
      path:"/scholarships",
        element:(
        <div>
          <Scholarships/>
          </div>
        )
    },
    {
      path:"/login",
        element:(
        <div>
          <Login/>
          </div>
        )
    },
    {
      path:"/signup",
        element:(
        <div>
          <SignUp/>
          </div>
        )
    },
    {
      path:"/contactus",
        element:(
        <div>
          <ContactUs/>
          </div>
        )
    }
    ] 
  }
])

function App() {
  return (
        <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App ;
