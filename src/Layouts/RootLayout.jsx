import { Outlet } from 'react-router-dom'
import { Sidebar, UserConfig, Topbar } from '../components'

function RootLayout() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <main>
        <Outlet />
      </main>
      <UserConfig />
    </>
  )
}

export default RootLayout
