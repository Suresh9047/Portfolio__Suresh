import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './Pages/HomePage'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    
    <div>
      <HomePage/>
    </div>

  );
}

export default App;
