import { useDispatch } from 'react-redux'
import Grid from './components/Grid'
import Search from './components/Search'
import Tab from './components/Tab'
import { fetchPhotos, fetchVideo } from './api/media.api'

function App() {

  const dispatch = useDispatch();

  const fetchadta = async()=>{
    let res = await fetchPhotos('apple');
    console.log(res)
  }

  return (
    <div className='bg-gray-900 text-white w-full h-screen p-5'>
      <Search/>
      <Tab/>
      <Grid/>
    </div>
  )
}

export default App