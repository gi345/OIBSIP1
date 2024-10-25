import React from 'react';
import '../styles/TributePage.css';  // Adjusted path for CSS file


const TributePage = () => {
  return (
    <div className="tribute-container">
      {/* Title Section */}
      <div className="title-section">
        <h1>Ratan Tata</h1>
        <p>1937 - 2024</p>
        <div className="play-button">&#9658;</div>
      </div>

      {/* Quote Section */}
      <div className="quote-section">
        <p>"Take the stones people throw at you, and use them to build a monument."</p>
        <img
          src={require('../images/download.jpg')}
          alt="Ratan Tata"
          className="tribute-image"
        />
      </div>

      {/* Biography Section */}
      <div className="biography-section">
        <h2>Biography</h2>
        <p>
          Ratan Naval Tata is an Indian industrialist, philanthropist, and a former chairman of Tata Sons. 
          He was the chairman of Tata Group, an Indian conglomerate, from 1991 to 2012, and again, as interim 
          chairman, from October 2016 through February 2017, and continues to head its charitable trusts. 
          Under his leadership, Tata Group's revenue grew significantly, and he has been credited with 
          transforming the group into a global business.
        </p>
        <p>
          Ratan Tata is well known for his humility, ethics, and philanthropic efforts, including 
          substantial donations to education, healthcare, and rural development. His contributions 
          have earned him several prestigious awards and honors both in India and globally.
        </p>
      </div>

      {/* Footer Section */}
      <div className="footer-section">
        <p>Made with ❤️ by Divyanshu Tiwari</p>
      </div>
    </div>
  );
};

export default TributePage;
