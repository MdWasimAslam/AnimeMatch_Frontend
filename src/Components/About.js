import React from 'react'
import Navbar from '../Components/Navbar.js'
import Footer from '../Components/Footer.js'



function About() {

  const containerStyle = {
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    maxWidth: '80vw',
    margin: '12vh auto',
  };

  return (
    <div>
      <Navbar />
      
      <div style={containerStyle}>
      <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Welcome to Anime Match!</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.5' }}>
        <strong>About Anime Match:</strong><br />
        We've taken inspiration from Mark Zuckerberg's iconic Facemash and put a creative spin on it. Our web app is all about the fascinating world of anime characters. We bring you a fun and engaging platform that lets you match the faces of your favorite anime characters.
      </p>
      <p style={{ fontSize: '18px', lineHeight: '1.5' }}>
        <strong>Why Anime Match?</strong><br />
        Anime has captivated hearts worldwide with its diverse characters, each with their unique charm and style. AnimeMatch celebrates this diversity by letting you compare and contrast these beloved characters in a lighthearted and entertaining way.
      </p>
      <p style={{ fontSize: '18px', lineHeight: '1.5' }}>
        <strong>How it Works:</strong><br />
        Start by selecting your favorite anime characters. Our algorithm will present you with pairs of anime character faces. Choose which character you think should win in each match. See how your choices compare to others in our community.
      </p>
 
     
      <p style={{ fontSize: '18px', lineHeight: '1.5' }}>
        Thank you for joining us at Anime Match, where anime characters meet their match!
      </p>
    </div>



      <Footer />
    </div>
  )
}

export default About