import { AiOutlineHome, AiOutlineCompass, AiOutlineStar } from 'react-icons/ai'
import { BsAlarm, BsPeople, BsBookmark } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'

export const MenuLinks = [
  { name: 'Home', to: '/', icon: AiOutlineHome },
  { name: 'Discover', to: '/discover', icon: AiOutlineCompass },
  { name: 'Comming Soon', to: '/comming-soon', icon: BsAlarm },
  { name: 'Community', to: '/community', icon: BsPeople },
]

export const LibraryLinks = [
  { name: 'Recent', to: '/recent', icon: BiTimeFive },
  { name: 'Bookmark', to: '/Bookmark', icon: BsBookmark },
  { name: 'Top Rated', to: '/top-rated', icon: AiOutlineStar },
]

export const TopBarLinks = [
  { name: 'Movies', to: '/movies' },
  { name: 'Series', to: '/series' },
  { name: 'TV Show', to: '/tv-show' },
  { name: 'Animations', to: '/animation' },
  { name: 'plan', to: '/plan' },
]
