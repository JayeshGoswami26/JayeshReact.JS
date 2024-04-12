import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import './App.less'
import './App.css'
// import Loder from "./components/Loder";
import Navbar from "./components/Navbar";
// import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
function App() {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3400);
  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <>
      <Router>
      <Navbar/>
      <Routes> 
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer/>
      </Router>
    </>
  )
}

export default App
