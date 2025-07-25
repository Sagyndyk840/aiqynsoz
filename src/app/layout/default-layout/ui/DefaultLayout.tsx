import { Outlet } from 'react-router-dom'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default DefaultLayout
