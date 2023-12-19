/* eslint-disable arrow-body-style */
import { Route, Routes } from 'react-router-dom'
import Discover from './pages/Discover'
import Topbar from './components/Topbar'
import MainLayout from './Layouts/RootLayout'
import OverviewLayout from './Layouts/OverviewLayout'
import MovieOverview from './pages/MovieOverview'
import PopularMovies from './pages/PopularMovies'

const App = () => {
  return (
    <div className="relative h-full">
      <Topbar />
      <div className="flex">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Discover />} />
            <Route path="popular-movies" element={<PopularMovies />} />
          </Route>
          <Route path="/overview" element={<OverviewLayout />}>
            <Route index element={<MovieOverview />} />
            <Route path="popular-movies/:id" element={<MovieOverview />} />
            <Route path=":id" element={<MovieOverview />} />
            <Route path="top-rated/:id" element={<MovieOverview />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
