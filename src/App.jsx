import { useState } from 'react'
import './App.css';


import {Outlet} from "react-router-dom"


function App() {
    

  return (
     <>
       <header>
         header
      </header>
       <main>
        <Outlet />
       </main>
       <footer>
       footer
       </footer>
     </>
  )
}

export default App
