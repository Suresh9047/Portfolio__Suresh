import React from 'react';
import './css/About.css';
import selfintro from '../components/assests/Videos/SelfIntro.mp4'


const SelfIntro = () => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>About Me</h2>
      <video
        width="600"
        height="400"
        controls
        style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
      >
       <source src={selfintro} type="video/mp4" />
      </video>
    </div>
  );
};

export default SelfIntro;
