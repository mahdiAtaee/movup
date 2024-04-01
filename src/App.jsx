/* eslint-disable arrow-body-style */
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './Layouts/RootLayout'
import AuthLayout from './Layouts/AuthLayout'
import MovieOverview from './pages/MovieOverview'
import PopularMovies from './pages/PopularMovies'
import Discover from './pages/Discover'
import Upcomming from './pages/Upcomming'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import TopRated from './pages/TopRated'
import Watchlist from './pages/Watchlist'

const App = () => {
  return (
    <div className="relative h-full">
      <div className="flex">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="popular-movies" element={<PopularMovies />} />
          </Route>
          <Route path="/discover" element={<MainLayout />}>
            <Route index element={<Discover />} />
          </Route>
          <Route path="/upcomming" element={<MainLayout />}>
            <Route index element={<Upcomming />} />
          </Route>
          <Route path="/top-rated" element={<MainLayout />}>
            <Route index element={<TopRated />} />
          </Route>
          <Route path="/bookmark" element={<MainLayout />}>
            <Route index element={<Watchlist />} />
          </Route>
          <Route path="/overview" element={<MainLayout />}>
            <Route index element={<MovieOverview />} />
            <Route path="popular-movies/:id" element={<MovieOverview />} />
            <Route path=":id" element={<MovieOverview />} />
            <Route path="top-rated/:id" element={<MovieOverview />} />
          </Route>
          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
