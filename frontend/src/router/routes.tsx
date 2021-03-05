import React from 'react'
import { PartialRouteObject } from 'react-router'

import AuthLayout from '../layouts/AuthLayout'
import DefaultLayout from '../layouts/DefaultLayout'

const routes: PartialRouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
  },
  {
    path: 'auth',
    element: <AuthLayout />,
  },
]

export default routes
