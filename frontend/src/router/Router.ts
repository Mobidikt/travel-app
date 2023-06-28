import { useRoutes } from 'react-router-dom'

import routes from './routes'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Router = () => {
  const routing = useRoutes(routes)

  return routing
}

export default Router
