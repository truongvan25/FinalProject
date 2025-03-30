import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Profile from './components/Profile';
import CourseList from './components/Course';
import Teachers from './components/Teachers';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  
    return (
      <Router>
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-300">
          <Navbar/>
          <div className="flex-grow  bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-300">
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/*<Route path="/login" element={<Login />} />*/}
                <Route path="/profile" element={<Profile />} />
                <Route path="/courses" element={<CourseList />} />
                <Route path="/teachers" element={<Teachers/>}/>
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    );
}

export default App;
