import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/index'
import User from './pages/user'
import SignIn from './pages/signin/index'
import Header from './components/Header'
import Footer from './components/Footer'

import './style/main.css'
import ErrorBoundary from './components/ErrorBoundary'
import NotFound from './pages/NotFound'
 
ReactDOM.render(
    <React.StrictMode>
        <Router>    
			<Header />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/user" element={<User />} />
                <Route path="/404" element={<NotFound/>}/>
                <Route path="*" element= { <Navigate replace to='/404' /> } />
            </Routes>
            
            <Footer />       
        </Router>
    </React.StrictMode>,
document.getElementById('root') 
)