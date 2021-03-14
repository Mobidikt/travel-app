import React from 'react'
import { IntlProvider } from 'react-intl'
import PropTypes from 'prop-types'
  // eslint-disable-next-line
import messages from './messages/index'
  // eslint-disable-next-line
const INTLProvider = ({ children: React.ReactNode, locale: string }) => (
    // eslint-disable-next-line
  <IntlProvider 
    // eslint-disable-next-line
    locale={locale} messages={messages[locale]}
      // eslint-disable-next-line
  >
    // eslint-disable-next-line
    {children}
      // eslint-disable-next-line
  </IntlProvider>
)

INTLProvider.propTypes = {
  children: PropTypes.node.isRequired,
  locale: PropTypes.string.isRequired,
}

export default INTLProvider