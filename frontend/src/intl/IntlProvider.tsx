import React from 'react'
import { IntlProvider } from 'react-intl'

import messages from './messages'

type IntlType = {
  children: React.ReactNode,
  locale: 'ru-ru' | 'en-us' | 'de-de',
}

const INTLProvider = ({ children, locale }: IntlType) => {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  )
}

export default INTLProvider
