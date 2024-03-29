import { AiOutlineHome, AiOutlineCompass, AiOutlineStar } from 'react-icons/ai'
import { BsAlarm, BsBookmark } from 'react-icons/bs'

export const MenuLinks = [
  { name: 'Home', to: '/', icon: AiOutlineHome },
  { name: 'Discover', to: '/discover', icon: AiOutlineCompass },
  { name: 'Up Comming', to: '/upcomming', icon: BsAlarm },
  { name: 'Top Rated', to: '/top-rated', icon: AiOutlineStar },
]

export const LibraryLinks = [
  { name: 'Bookmark', to: '/Bookmark', icon: BsBookmark },
]

export const TopBarLinks = [
  { name: 'Movies', to: '/movies' },
  { name: 'Series', to: '/series' },
  { name: 'TV Show', to: '/tv-show' },
  { name: 'Animations', to: '/animation' },
  { name: 'plan', to: '/plan' },
]
