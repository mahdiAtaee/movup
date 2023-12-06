import { Outlet } from 'react-router-dom'
import { Sidebar, UserConfig } from '../components'

function RootLayout() {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>
      <UserConfig />
    </>
  )
}

export default RootLayout
