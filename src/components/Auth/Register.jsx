import { Link } from 'react-router-dom'
import Poster from '../../assets/movie-posters.jpg'
import { createRequestToken } from '../../services/FetchData'

function Register() {
  const handleSubmitForm = (e) => {
    e.preventDefault()
    const result = createRequestToken()
    result.then(({ data }) => window.location.replace(`https://www.themoviedb.org/authenticate/${data?.request_token}?redirect_to=http://localhost:3000/auth/login`))
  }
  return (
    <div className="flex items-center h-screen w-screen bg-black pl-20">
      <div className="form-section flex-1 w-1/2 h-full">
        <form onSubmit={(e) => handleSubmitForm(e)}>
          <div className="mt-40">
            <h1 className="font-bold py-2 text-white font-primary text-4xl text-left">Sign UP</h1>
            <p className="text-gray-400 font-Catamaran text-2xl text-left">
              sign up In TMDB Data base to access million movies
            </p>
          </div>
          <input
            type="submit"
            value="Sign up"
            className="w-2/4 h-[50px] bg-blue-500 text-black cursor-pointer rounded-sm font-bold font-Catamaran text-2xl mt-6 hover:text-white transition-all"
          />
          <p className="text-white my-4">
            back To{' '}
            <Link to="/" className="text-purple-300 cursor-pointer">
              Home
            </Link>
          </p>
        </form>
      </div>
      <div className="poster-section w-1/2 h-full relative after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black after:opacity-40 before:w-40 before:h-full before:absolute before:-left-16 before:top-0 before:bg-black before:z-50 before:-skew-x-6">
        <img
          src={Poster}
          alt="poster"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Register
