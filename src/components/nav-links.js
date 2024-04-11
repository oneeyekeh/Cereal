import React from 'react'

import PropTypes from 'prop-types'

import './nav-links.css'

const NavLinks = (props) => {
  return (
    <div className="nav-links-links">
      <span className="navLink">{props.link}</span>
      <span className="navLink">{props.link1}</span>
      <span className="navLink">{props.link2}</span>
    </div>
  )
}

NavLinks.defaultProps = {
  link1: 'services',
  link: 'work',
  link2: 'contact',
}

NavLinks.propTypes = {
  link1: PropTypes.string,
  link: PropTypes.string,
  link2: PropTypes.string,
}

export default NavLinks
