import Loader from '../assets/Loader.gif'

function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img src={Loader} className="w-64 h-64 m-8" />
    </div>
  )
}

export default Loading
