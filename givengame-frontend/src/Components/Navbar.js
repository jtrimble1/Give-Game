import React from 'react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser, SignOutButton } from '@clerk/clerk-react'
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    
const { user } = useUser();

    return (
      // *** first rendition ***
      // <nav className="navbar">
      //   <div className="navbar-logo">
      //     <img src="/Assets/logo.png" alt="Give & Game Logo" className="h-10 w-auto" />
      //     <SignedIn>
      //         <span className="welcome-message">Welcome, {user?.firstName}!</span>
      //     </SignedIn>
      //   </div>

      //   <div className="navbar-links">
      //     <Link to="/">Home</Link>
      //     <Link to="/whyg&g">Why Give & Game</Link>
      //     <Link to="/guides">G&G Guides</Link>
      //     <Link to="/gamers">Gamers</Link>
      //     <Link to="givers">Givers</Link>
      //   </div>

      //   <div className="navbar-right">
      //     <input type="text" placeholder="Team Search" />
      //     <SignedOut>
      //       <SignInButton mode="modal" redirectUrl="/role-page">
      //       <button className="auth-button">Sign In</button>
      //       </SignInButton>

      //       <SignUpButton mode="modal" redirectUrl="/role-page">
      //         <button className="auth-button">Register</button>
      //       </SignUpButton>
      //   </SignedOut>

      //   <SignedIn>
      //     <Link to="/profile">
      //       <img src={user?.imageUrl} alt="Profile" className="profile-icon" />
      //     </Link>
      //     <SignOutButton><button>Logout</button></SignOutButton>
      //   </SignedIn>
      //   </div>
      // </nav>
      <nav className="navbar-gfm">
      <div className="navbar-left">
        <div className="dropdown">
          <Link to="about-us" className="nav-link">
          About Us
          </Link>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Donate</button>
          <div className="dropdown-content">
            <Link to="/teams">By Team</Link>
            <Link to="/leaguesy">By League</Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Sponsors</button>
          <div className="dropdown-content">
            <Link to="/">Corporate Sponsors</Link>
            <Link to="/">Local Sponsors</Link>
            <Link to="/">Donors</Link>
          </div>
        </div>
      </div>

      <div className="navbar-center">
        <Link to="/" className="logo-text">
          <span className="logo-word">
            <span className="logo-letter">G</span>ive
          </span>
          <span className="amp">&</span>
          <span className="logo-word game">
            <span className="logo-letter">G</span>ame
          </span>
        </Link>
      </div>

      <div className="navbar-right">
        <input className="search-bar" placeholder="Search Teams/Leagues..." />

        <SignedOut>
          <SignInButton mode="modal" redirectUrl="/thank-you">
            <button className="auth-btn">Sign In</button>
          </SignInButton>
          <SignUpButton mode="modal" redirectUrl="/thank-you">
            <button className="auth-btn register">Register</button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <Link to="/profile">
            <img src={user?.imageUrl} alt="Profile" className="profile-icon" />
          </Link>
          <SignOutButton><button className="auth-btn">Logout</button></SignOutButton>
        </SignedIn>
      </div>
    </nav>
    )
}

export default Navbar;