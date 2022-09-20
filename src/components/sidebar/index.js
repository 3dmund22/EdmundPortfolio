import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import './index.scss'
// import LogoS from '../../assets/images/logo-s.png'
import LogoS from '../../assets/images/FE1.jpg'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogoS} alt="logo" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="about-link"
                    to="/about"
                >
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/edmund-t-chege-7399331ab/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        {/* <li>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li> */}
        <li>
          <a href="skype:live:edmundshege" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faSkype}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className='hamburger-icon' />
        </div>
    )
}

export default Sidebar
