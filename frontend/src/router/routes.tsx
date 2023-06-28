import React, { lazy } from 'react'
import { PartialRouteObject } from 'react-router'
import { Navigate } from 'react-router-dom'

import DefaultLayout from '../layouts/DefaultLayout'
import CountriesPage from '../pages/Countries/Countries'

const CountryPage = lazy(() => import('../pages/Country/Country'))

const routes: PartialRouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/countries',
        element: <CountriesPage />,
      },
      {
        path: '/countries/:id',
        element: <CountryPage />,
      },
      {
        path: '/',
        element: <Navigate to="/countries" />,
      },
    ],
  },
]

export default routes
