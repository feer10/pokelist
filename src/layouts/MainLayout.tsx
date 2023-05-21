import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout: FC = () => {
  return (
    <div className="layout-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
