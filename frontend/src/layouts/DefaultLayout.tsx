import React from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import logo from '../assets/rs-logo.png'
import './DefaultLayout.scss'

const { Header, Content, Footer } = Layout

const DefaultLayout: React.FC = () => (
  <Layout className="default-layout">
    {/* <Header /> */}
    <Content className="app-content">
      <Outlet />
    </Content>
    <Footer className="app-footer">
      <ul className="app-footer-list">
        <li className="app-footer-list__item">
          <a href="https://github.com/Mobidikt">Krill Metsker</a>
        </li>
        <li className="app-footer-list__item">
          <a href="https://github.com/ArtyomMakarov">Artsem Makarov</a>
        </li>
        <li className="app-footer-list__item">
          <div className="logo-container">
            <a href="https://rs.school/">
              <img className="rs-logo" src={logo} alt="rs-school-logo" />
            </a>
            <p>2021</p>
          </div>
        </li>
        <li className="app-footer-list__item">
          <a href="https://github.com/anzhelaAbitova">Anzhela Abitova</a>
        </li>
        <li className="app-footer-list__item">
          <a href="https://github.com/IKLOA">Andrey Gavrilov</a>
        </li>
      </ul>
    </Footer>
  </Layout>
)

export default DefaultLayout
