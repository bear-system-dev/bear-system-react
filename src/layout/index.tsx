import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export function DefaultLayout() {
  return (
    <>
      <Header variant="default" />
      <Outlet />
    </>
  )
}

export function AlternativeLayout() {
  return (
    <>
      <Header variant="alternative" />
      <Outlet />
    </>
  )
}
