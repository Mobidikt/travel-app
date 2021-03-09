import React, { Suspense } from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import './DefaultLayout.scss'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const { Content } = Layout

const DefaultLayout: React.FC = () => (
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

export default DefaultLayout
