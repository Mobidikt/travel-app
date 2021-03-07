import { Button } from 'antd'
import React from 'react'
import { useLocation } from 'react-router'
import logo from '../../assets/logo.png'
import LanguageSelect from '../LanguageSelect/LanguageSelect'
import Search from '../Search/Search'
import './Header.scss'

const isLogin = false
// eslint-disable-next-line
function Header() {
  const { pathname } = useLocation()
  const mainLocation = pathname === '/countries'
  return (
    <div className="header">
      <div className="header__wrapper">
        <a href="/countries">
          <img src={logo} className="header__logo" alt="logo" />
        </a>
        <div className="header__menu">
          <LanguageSelect />
          {mainLocation ? <Search /> : null}
          {isLogin ? (
            <button type="button">Выйти</button>
          ) : (
            <Button className="header__btn" shape="round" size="large">
              Авторизоваться
            </Button>
          )}
        </div>
      </div>
      <h1 className="header__title">Travel app</h1>
    </div>
  )
}

export default Header
