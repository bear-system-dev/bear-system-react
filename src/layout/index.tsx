import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
