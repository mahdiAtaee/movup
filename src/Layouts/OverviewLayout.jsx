import { Outlet } from 'react-router-dom'

function OverviewLayout() {
  return (
    <main className="relative">
      <Outlet />
    </main>
  )
}

export default OverviewLayout
