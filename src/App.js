import React, {useState} from 'react'
import { Navbar } from './components/Navbar'
import { Routs } from './components/Routs'
import { Footer } from './components/Footer'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const App = () => {
    const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div className={darkTheme ? 'dark': ''}>
        <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
            <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme}/> 
            <Routs/>
            <Footer/>
        </div>
    </div>
  )
}

export default App