import React from 'react'
import logo from '../images/logo.svg'
import toTop from '../images/to-top.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">

        <a href="#" className="logo">
          <img
            src={logo}
            className="logo__img"
            alt="Crazy Baby"
          />
        </a>

        <a href="#" className="footer__to-top">
          <img
            src={toTop}
            alt="Back to top"
          />
        </a>

      </div>

      <ul className="footer__list">
        <li className="footer__item">
          <a
            href="https://facebook.com/"
            className="footer__link footer__link--facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </li>
        <li className="footer__item">
          <a
            href="https://twitter.com/"
            className="footer__link footer__link--twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </li>
        <li className="footer__item">
          <a
            href="https://www.instagram.com/"
            className="footer__link footer__link--instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </li>
      </ul>
      <p className="footer__terms">
        © 2019 All rights reserved. Terms of Use & Privacy Policy
      </p>
    </footer>
  )
}
