import React, {useState, useEffect, useContext} from 'react'

import AuthContext from '../auth/AuthContext.js'

import Navbar from '../components/Navbar';
import Loading from '../components/Loading';


const Home = () => {
    
    const {auth, setAuth} = useContext(AuthContext)

    return (
        <div className="App">
            <Navbar></Navbar>
            <div id="body">

            </div>
        </div>
    )
}

export default Home
