import * as React    from "react"           ;
import * as ReactDOM from "react-dom"       ;
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet
}                   from "react-router-dom"      ;
import Home         from "./routess/Home"         ;
import Physics      from "./routess/Physics"      ;
import Math         from "./routess/Math"         ;
import Music        from "./routess/Music"        ;
import Blog         from "./routess/Blog"         ;
import About        from "./routess/About"        ;
import Portfolio    from "./routess/Portfolio";
import Navbar       from "./Components/Navbar"   ;
import                   "./App.css"             ;

const AppLayout = () => (
  <>
    <Navbar/>
    <Outlet/>
  </>
);
const router = createBrowserRouter(createRoutesFromElements(<Route element={<AppLayout />}>
       <Route path="/"          element={<Home      />} />
       <Route path="/Portfolio" element={<Portfolio />} />
       <Route path="/Physics"   element={<Physics   />} />
       <Route path="/Math"      element={<Math      />} />
       <Route path="/Music"     element={<Music     />} />
       <Route path="/Blog"      element={<Blog      />} />
       <Route path="/About"     element={<About     />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
    /*
const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "physics",
        element: <Physics />,
      },
      {
        path: "mathematics",
        element: <Math />,
      },
      {
        path: "music",
        element: <Music />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
*/


// Alternate method that's maybe not as efficient. 
/*
const router = createBrowserRouter{
      path: "/",
      element: (
        <div>
          <h1> Welcome to Professional Average To Dumb! </h1>
        <Link to='about'>About Us</Link>
        <Link to='blog '>Blog </Link>
        </div>
      ),
    },
*/