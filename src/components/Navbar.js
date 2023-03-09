import React, { useState,useRef  } from 'react'
// import stript from './script'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);
  const [moreOpen, setMoreOpen] = useState(false);
  const navLinksRef = useRef(null);

  function handleMenuOpen() {
    setIsOpen(true);
    navLinksRef.current.style.left = "0";
  }

  function handleMenuClose() {
    setIsOpen(false);
    navLinksRef.current.style.left = "-100%";
  }

  
  function handleSubMenuClick() {
    setIsSubMenuOpen(!isSubMenuOpen);
  }

  function handleMoreClick() {
    console.log(moreOpen);
    setMoreOpen(!moreOpen);
  }

  return (
    <>
      <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'></link>
      <nav>
        <div className="navbar">
          <i  className='bx bx-menu' onClick={handleMenuOpen}></i>
          <div className="logo"><a href="#">विशाल सह्याद्री नगर</a></div>
          <div className={`nav-links ${isOpen ? 'open' : ''}`} ref={navLinksRef}>
            <div className="sidebar-logo">
              <span className="logo-name">सह्याद्री नगर</span>
              <i className='bx bx-x' onClick={handleMenuClose}></i>
            </div>
            <ul className="links">
              <li><a href="#">मुख्यपृष्ठ</a></li>                            
              <li>
                <a href="#" >ठराव</a>
                <i className='bx bxs-chevron-down htmlcss-arrow arrow  ' onClick={handleSubMenuClick}></i>
                <ul  className={`${isSubMenuOpen ? 'htmlCss-sub-menu sub-menu show1' : 'show1'}`} >
                  <li><a href="#">ए.जी.एम</a></li>
                  {/* <li><a href="#">Login Forms</a></li> */}
                  {/* <li><a href="#">Card Design</a></li> */}
                  <li className="more">
                    <span><a href="#">पुनर्विकास</a>
                      <i className='bx bxs-chevron-right arrow more-arrow' onClick={handleMoreClick}></i>
                    </span>
                    <ul className={`${moreOpen ? 'more-sub-menu' : 'more-sub-menu sub-menu'}`}>
                      <li><a href="#">स्ट्रक्चरल ऑडिट</a></li>
                      {/* <li><a href="#">Pre-loader</a></li> */}
                      {/* <li><a href="#">Glassmorphism</a></li> */}
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="#">उपक्रम</a></li>
              <li><a href="#">इतिहास</a></li>
              {/* <li>
                <a href="#">JAVASCRIPT</a>
                <i className='bx bxs-chevron-down js-arrow arrow '></i>
                <ul className="js-sub-menu sub-menu">
                  <li><a href="#">Dynamic Clock</a></li>
                  <li><a href="#">Form Validation</a></li>
                  <li><a href="#">Card Slider</a></li>
                  <li><a href="#">Complete Website</a></li>
                </ul>
              </li>
              <li><a href="#">ABOUT US</a></li>
              <li><a href="#">CONTACT US</a></li> */}
            </ul>
          </div>
          <div className="search-box">
            <i className='bx bx-search'></i>
            <div className="input-box">
              <input type="text" placeholder="Search..." />
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar