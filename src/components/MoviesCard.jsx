import { useState } from 'react'
import { useGetTopMoviesQuery } from '../redux/services/ApiCall'

function MoviesCard() {
  const { data } = useGetTopMoviesQuery()
  const [BaseURL] = useState('https://image.tmdb.org/t/p/w500')
  const partialImagePath = '/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg'
  const imageURL = `${BaseURL}${partialImagePath}`
  console.log(data)
  return (
    <div>
      <img src={imageURL} alt="" className="w-40 h-40" />
    </div>
  )
}

export default MoviesCard
