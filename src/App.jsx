import { Route, Routes } from 'react-router-dom'
import { Sidebar } from './components'
import Discover from './pages/Discover'
import Topbar from './components/Topbar'
import UserConfig from './components/UserConfig'

const App = () => (
  <div className="relative h-full flex">
    <Sidebar />
    <div>
      <Topbar />

      <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
        <div className="flex-1 h-fit pb-40">
          <Routes>
            <Route path="/" element={<Discover />} />
          </Routes>
        </div>
      </div>
    </div>
    <UserConfig />
  </div>
)

export default App
