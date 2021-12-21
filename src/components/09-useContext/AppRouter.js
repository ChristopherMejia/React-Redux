import React from 'react'
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Navigate as Redirect,
  } from "react-router-dom";
import NavBar from './NavBar';
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />

                <div className='container'>
                <Switch>
                    <Route  path='/' element={<HomeScreen />} />
                    <Route  path='/about' element={<AboutScreen/>} />
                    <Route  path='/login' element={<LoginScreen/>} />
                    <Route  path="*" element={ <Redirect to="/"/> } />
                    
                </Switch>
                </div>

            </div>
        </Router>
      
    )
}

export default AppRouter
