import Loader from '../assets/Loader.gif'

function Loading({ loadingTitle = 'loading' }) {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <img src={Loader} className="w-64 h-64 m-8" />
      <span className="font-bold text-3xl ">{loadingTitle}</span>
    </div>
  )
}

export default Loading
