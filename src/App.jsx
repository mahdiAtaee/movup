/* eslint-disable arrow-body-style */
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Topbar from './components/Topbar'
import MainLayout from './Layouts/RootLayout'
import MovieOverview from './pages/MovieOverview'
import PopularMovies from './pages/PopularMovies'
import Discover from './pages/Discover'

const App = () => {
  return (
    <div className="relative h-full">
      <Topbar />
      <div className="flex">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="popular-movies" element={<PopularMovies />} />
          </Route>
          <Route path="/discover" element={<MainLayout />}>
            <Route index element={<Discover />} />
          </Route>
          <Route path="/overview" element={<MainLayout />}>
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
