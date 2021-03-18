import React from 'react'
import rsLogo from '../../assets/rs-logo.png'
import './Footer.scss'

const Footer: React.FC = () => {
  return (
    <footer className="app-footer">
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
    </footer>
  )
}

export default Footer
