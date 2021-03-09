import React from 'react'
import { Button } from 'antd'
import { useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import LanguageSelect from '../LanguageSelect/LanguageSelect'
import Search from '../Search/Search'
import useActions from '../../hooks/useActions'
import AuthCard from '../AuthCard/AuthCard'
import './Header.scss'

const isLogin = false // вошел ли пользователь
const country = 'Швейцария' // Буде подтягивать название страны
// eslint-disable-next-line
function Header() {
  const { pathname } = useLocation()
  const mainLocation = pathname === '/countries'

  const { setIsVisibleAuthCard } = useActions()

  return (
    <div className="header">
      <AuthCard />
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
            <Button
              className="header__btn"
              shape="round"
              size="large"
              onClick={setIsVisibleAuthCard}
            >
              Авторизоваться
            </Button>
          )}
        </div>
      </div>
      <h1 className="header__title">{mainLocation ? 'Travel app' : `Travel to the ${country}`}</h1>
    </div>
  )
}

export default Header
