import React from 'react'
import { PartialRouteObject } from 'react-router'

import DefaultLayout from '../layouts/DefaultLayout'

const routes: PartialRouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
  },
]

export default routes
