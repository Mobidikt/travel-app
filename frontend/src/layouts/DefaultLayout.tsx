import React, { Suspense, useEffect } from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import './DefaultLayout.scss'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import useActions from '../hooks/useActions'

const { Content } = Layout

const DefaultLayout: React.FC = () => {
  const { fetchCountries } = useActions()
  useEffect(() => {
    fetchCountries(null)
  }, [fetchCountries])

  return (
    <Layout className="default-layout">
      <Header />
      <Content className="app-content">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Content>
      <Footer />
    </Layout>
  )
}

export default DefaultLayout
