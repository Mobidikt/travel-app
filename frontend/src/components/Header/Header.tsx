import React from 'react'
import logo from '../../assets/logo.png'
import Search from '../Search/Search'
import './Header.scss'

// eslint-disable-next-line
function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <img src={logo} className="header__logo" alt="logo" />
        <Search />
      </div>
      <h1 className="header__title">Travel app</h1>
    </div>
  )
}

export default Header
