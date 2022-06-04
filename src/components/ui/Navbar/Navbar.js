import React from 'react';

import { NavLink } from 'react-router-dom';

import logo256 from '../../../assets/images/logo-256.png';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles['bg-custom']}`}>
      <div className="container-fluid">
        <a className="navbar-brand py-1 mx-3" href="/">
          <img
            src={logo256}
            alt="ParadiseCamp Logo"
            width="64"
            height="64"
            className="d-inline-block align-text-center"
          />
          <span className={styles['logo-text']}>ParadiseCamp</span>
        </a>
        <button
          className="navbar-toggler mx-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto py-2 mx-3 text-center">
            <li className="nav-item mx-3">
              <NavLink
                to={'/login'}
                className="nav-link nav-link-login my-2 px-3 py-3"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${styles['custom-nav-link']} ${styles['nav-link-signup']} my-2 px-3 py-3`}
                href="/"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
