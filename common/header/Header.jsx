import React, { useState, useEffect } from "react";
import Head from "./Head";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});

  // Mock function to simulate fetching user profile data
  const fetchProfileData = () => {
    // This would typically be an API call
    return {
      username: "JohnDoe",
      profilePic: "data:image/jpeg;base64,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", // Replace with your profile picture URL
    };
  };

  useEffect(() => {
    // Simulate user login
    const loggedIn = true; // Replace with actual authentication check
    if (loggedIn) {
      setIsLoggedIn(true);
      setProfile(fetchProfileData());
    }
  }, []);

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">All Course</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/team">Instrument</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            

          </ul>
          <div className="start">
            <Link to="/certificate" className="button">GET CERTIFICATE</Link>
          </div>
          {isLoggedIn ? (
            <div className="profile">
            <Link to="/profile">
              <img src={profile.profilePic} alt={profile.username} className="profile-pic" />
            </Link>
          </div>
          
          ) : (
            <Link to="/login" className="button">Login</Link>
          )}
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
