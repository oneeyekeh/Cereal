import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Hola template</title>
        <meta property="og:title" content="Hola template" />
      </Helmet>
      <div className="home-navbar">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-branding">
            <span className="home-text">
              <span>4&apos;33</span>
              <span>&quot;</span>
            </span>
          </div>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-right">
                <div className="home-button">
                  <button className="home-work-with-us button">
                    <span className="home-text03">Join Waitlist</span>
                    <img
                      alt="image"
                      src="/hamburger.svg"
                      className="home-image"
                    />
                  </button>
                </div>
              </div>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="home-work-with-us1 button">
              <span className="home-text04">work with us</span>
              <img alt="image" src="/hamburger.svg" className="home-image01" />
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-top">
                <div className="home-branding1">
                  <span className="home-text05">hola studio</span>
                </div>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-middle"
              >
                <div className="home-links">
                  <span className="navLink">work</span>
                  <span className="navLink">services</span>
                  <span className="navLink">contact</span>
                </div>
                <button className="home-work-with-us2 button">
                  <span className="home-text06">work with us</span>
                </button>
              </nav>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-header">
          <h1 className="home-text07">
            <span>
              We can use AI to act as an assistant, similar to Siri. However, in
              doing so, we miss the essence of human emotion.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              As we believe AI cannot replace human sentiment and experience,
              having another human being would be a better option to bridge the
              empathy gap.
            </span>
          </h1>
          <img alt="image" src="/mouse.svg" className="home-image02" />
        </div>
        <div className="home-hero-image">
          <img alt="image" src="/computer.svg" className="home-image03" />
        </div>
      </div>
      <div className="home-who">
        <div className="home-header1">
          <div className="home-heading">
            <h2 className="home-text10">
              This is a search engine, our solution is to implement a box to
              synthesize the background and context of search results.
            </h2>
          </div>
          <button className="home-button1 button">Request Early Access</button>
        </div>
        <div className="home-preview">
          <div className="home-image04">
            <img alt="image" src="/preview.svg" className="home-image05" />
          </div>
          <div className="home-video">
            <video src poster="/video.svg" className="home-video1"></video>
          </div>
        </div>
      </div>
      <div className="home-book">
        <div className="home-content">
          <div className="home-left">
            <h2 className="home-text11">
              Book a 15 minutes consultation to check how can we help you
            </h2>
            <button className="home-button2 button">
              <span className="home-text12">book a call</span>
            </button>
          </div>
          <img alt="image" src="/message.svg" className="home-image06" />
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-locations">
          <div className="home-location"></div>
          <span className="home-details">
            <span>All right reserved, 2024</span>
            <br></br>
            <span>Cereal Inc</span>
            <br></br>
          </span>
        </div>
        <div className="home-socials">
          <div className="home-row">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/facebook%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/twitter%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/dribbble%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/instagram%20-%20negative.svg"
                className="social"
              />
            </a>
          </div>
          <div className="home-row1">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/linkedin%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/youtube%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/telegram%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/medium%20-%20negative.svg"
                className="social"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
