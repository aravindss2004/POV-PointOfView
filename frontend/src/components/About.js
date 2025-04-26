import React from 'react'
import './About.css'
import Header from "./Header";
function About() {
  return (
    
    <div className='about'>
        <Header/>

        <h1 className='main-heading'>ABOUT POV</h1>
        <div className='about-info'>
          <p>Our mission is to foster inclusivity, celebrate diversity, and amplify every voice. </p>

          <p>Through our news coverage, we empower individuals to engage with diverse perspectives and connect with others. Join us in building a more informed, compassionate world where understanding and empathy flourish.</p>
        </div>
        <hr className="line" /> 
        <h2 className='about-subheading'>MEET OUR FOUNDERS</h2>
        <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <div className="about-card">
              <div className="about__details">
                <h2>Aravind S S </h2>
                <h3>Software Engineer</h3>
               
                <div className="about__links">
                <div className='email'>
                <a href="mailto:ssaravind2004@mail.com"><i className="fas fa-envelope"></i> ssaravind2004@mail.com</a>
                  </div>
                  <a href="https://www.instagram.com/aravind_ss_2004?igsh=MXBlNnh5dHh1MmlqeQ==&utm_source=ig_contact_invite "><i className="fab fa-instagram"></i></a>
                  <span className="about__link-space"></span>
                  <a href="https://github.com/24-Aarushi-Singh-24"><i className="fab fa-github"></i></a>
                  <span className="about__link-space"></span>
                  <a href="https://github.com/aravindss2004"><i className="fab fa-linkedin"></i></a>
                  
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
