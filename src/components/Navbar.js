import React, { useState } from 'react'
// import './Navbar.css'
// import { NavLink } from 'react-router-dom'
// import $ from 'jquery'

import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  // function animation() {
  //   var tabsNewAnim = $('#navbarSupportedContent')
  //   var activeItemNewAnim = tabsNewAnim.find('.active')
  //   var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight()
  //   var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth()
  //   var itemPosNewAnimTop = activeItemNewAnim.position()
  //   var itemPosNewAnimLeft = activeItemNewAnim.position()
  //   $('.hori-selector').css({
  //     top: itemPosNewAnimTop.top + 'px',
  //     left: itemPosNewAnimLeft.left + 'px',
  //     height: activeWidthNewAnimHeight + 'px',
  //     width: activeWidthNewAnimWidth + 'px',
  //   })
  //   $('#navbarSupportedContent').on('click', 'li', function (e) {
  //     $('#navbarSupportedContent ul li').removeClass('active')
  //     $(this).addClass('active')
  //     var activeWidthNewAnimHeight = $(this).innerHeight()
  //     var activeWidthNewAnimWidth = $(this).innerWidth()
  //     var itemPosNewAnimTop = $(this).position()
  //     var itemPosNewAnimLeft = $(this).position()
  //     $('.hori-selector').css({
  //       top: itemPosNewAnimTop.top + 'px',
  //       left: itemPosNewAnimLeft.left + 'px',
  //       height: activeWidthNewAnimHeight + 'px',
  //       width: activeWidthNewAnimWidth + 'px',
  //     })
  //   })
  // }

  // useEffect(() => {
  //   animation()
  //   $(window).on('resize', function () {
  //     setTimeout(function () {
  //       animation()
  //     }, 500)
  //   })
  // }, [])

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>M</span>y
            <span>P</span>osts
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">Sign In</NavLink>
            </li>
            <li>
              <NavLink to="/service">Sign Up</NavLink>
            </li>
            {/* <li>
              <NavLink to="/contact">contact</NavLink>
            </li> */}
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_thapa">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_thapa">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                target="_thapa">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>




    // <nav className='navbar navbar-expand-lg navbar-mainbg'>
    //   <NavLink className='navbar-brand navbar-logo' to='/' exact>
    //     PostMessage
    //   </NavLink>

    //   <button
    //     className='navbar-toggler'
    //     onClick={function () {
    //       setTimeout(function () {
    //         animation()
    //       })
    //     }}
    //     type='button'
    //     data-toggle='collapse'
    //     data-target='#navbarSupportedContent'
    //     aria-controls='navbarSupportedContent'
    //     aria-expanded='false'
    //     aria-label='Toggle navigation'
    //   >
    //     <i className='fas fa-bars text-white'></i>
    //   </button>

    //   <div className='collapse navbar-collapse' id='navbarSupportedContent'>
    //     <ul className='navbar-nav ml-auto'>
    //       <div className='hori-selector'>
    //         <div className='left'></div>
    //         <div className='right'></div>
    //       </div>

    //       <li className='nav-item active'>
    //         <NavLink className='nav-link' to='/' exact>
    //           <i className='fas fa-tachometer-alt'></i>Dashboard
    //         </NavLink>
    //       </li>

    //       <li className='nav-item'>
    //         <NavLink className='nav-link' to='/about' exact>
    //           <i className='far fa-address-book'></i>Sign in
    //         </NavLink>
    //       </li>

    //       <li className='nav-item'>
    //         <NavLink className='nav-link' to='/service' exact>
    //           <i className='far fa-clone'></i>Sign up
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  )
}
export default Navbar
