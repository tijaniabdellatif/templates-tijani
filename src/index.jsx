
import App from "./App";
import {

    createBrowserRouter,
    createRoutesFromElements,
    Route,
  
    
  } from "react-router-dom";

  import Home from "./pages/Home";
  

  export const router = createBrowserRouter(
    createRoutesFromElements(
  
         <Route path="/" element={<App />}>
            
          <Route path="home" element={<Home />} />

          <Route path="*" element={<div>Error 404</div>} />

         </Route>
    )
  );


  