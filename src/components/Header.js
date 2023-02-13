import React from 'react'
import logo from '../images/logo.svg'
import menu from '../images/menu.svg'
import wirelessSpeaker_original from '../images/wirelessSpeaker_original.svg'
import cross from '../images/cross.svg'

class Header extends React.Component {
  render() {
    return (
        <header className="header">
          <div className="header__top">
            <div className="header__logo">
              <img
                  src={logo}
                  alt="logo"
              />
            </div>

            <div className="header__menu-icon">
              <a href="/#menu">
                <img src={menu} alt="menu-icon"/>
              </a>
            </div>

            <div className="header__buttons">
              <a href="/#specs" className="header__button">SPECS</a>
              <a href="/#en" className="header__button header__button--active">EN </a>
              <a href="/#ua" className="header__button">/ UA</a>
              <a href="/#questions" className="header__button--buy">Buy</a>
            </div>
          </div>

          <div className="grid ">
            <div className="grid__item--blink">
              <img
                  src={wirelessSpeaker_original}
                  alt="wirelessSpeakers"
                  className="header__content-image"
              />
            </div>

            <div className=" grid__item--1-3 grid__item--desktop-1-4">
              <h1 className="header__title">
                Futuristic Wireless Speaker
              </h1>
              <p className="header__content-text grid__item--desktop-1-3">
                Luna’s performance is balanced and smooth in all frequency
                ranges which makes the music both naturally pleasant and distinctly more layered.
              </p>
            </div>

            <div className="grid__item grid__item--4-8 grid__item--desktop-5-12">
              <img
                  src={wirelessSpeaker_original}
                  alt="wirelessSpeakers"
                  className="header__content-image"
              />
            </div>

          </div>

          <nav  className="page__menu menu" id="menu">
            <div className="menu__content">

              <ul className="menu__list">
                <li className="menu__item">
                  <a href="/#" className="menu__logo">
                    <img src={cross} alt="cross"/>
                  </a>
                </li>

                <li className="menu__item">
                  <a href="/#presentation" className="menu__link">OUR STORY</a>
                </li>
                <li className="menu__item">
                  <a href="/#aboutUS" className="menu__link">ABOUT US</a>
                </li>
                <li className="menu__item">
                  <a href="/#technology" className="menu__link">TECHNOLOGY</a>
                </li>
                <li className="menu__item">
                  <a href="/#features" className="menu__link">FEATURES</a>
                </li>
                <li className="menu__item">
                  <a href="/#questions" className="menu__link">GET IN TOUCH</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
    )
  }
}

export default Header
