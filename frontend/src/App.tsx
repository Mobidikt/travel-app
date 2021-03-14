import React from 'react'
import Router from './router/Router'
import { IntlProvider, LOCALES } from './intl/index'
import useTypedSelector from './hooks/useTypedSelector'

const App: React.FC = () => {
  const { language } = useTypedSelector((state) => state.language)
  return(
  <div className="App">
    <IntlProvider locale={LOCALES[language]}>
      <Router />
    </IntlProvider>
  </div>
  )
}

export default App
