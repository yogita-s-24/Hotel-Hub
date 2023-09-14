import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {

  const currentPath = window.location.pathname;

  function getActiveClass(path){
    return currentPath === path ? "active" : 'text-gray-300 font-semibold'; 
  }

  return (
    <>

<nav className="nav bg-gray-900 p-3 px-10">
        <div className="container">
          <Link to="#" className="text-white ">
            Royal Hub
          </Link>

          <div className="space">
            <Link to="/" className={getActiveClass('/')}>
              Home
            </Link>

            <Link to="/about" className={getActiveClass('/about')}>
              About
            </Link>

            <Link to="/blog" className={getActiveClass('/blog')}>
              Blogs
            </Link>

            <Link to="/menu" className={getActiveClass('/menu')}>
              Menu
            </Link>

            <Link to="/login" className={getActiveClass('/login')}>
             Login
            </Link>

            <Link to="/login" className={getActiveClass('/contact')}>
                Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

