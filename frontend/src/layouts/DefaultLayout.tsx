import React, { Suspense } from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import rsLogo from '../assets/rs-logo.png'
import './DefaultLayout.scss'
import Header from '../components/Header/Header'

const { Content, Footer } = Layout

const DefaultLayout: React.FC = () => (
  <Layout className="default-layout">
    <Header />
    <Content className="app-content">
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
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
              <img className="rs-logo" src={rsLogo} alt="rs-school-logo" />
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
