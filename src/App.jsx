import { useDispatch } from 'react-redux'
import Grid from './components/Grid'
import Search from './components/Search'
import Tab from './components/Tab'
import { fetchPhotos, fetchVideo } from './api/media.api'

function App() {

  const dispatch = useDispatch();

  const fetchadta = async()=>{
    let res = await fetchVideo('apple');
    console.log(res)
  }

  return (
    <div className='bg-gray-900 text-white w-full h-screen p-5'>
      <Search/>
      <Tab/>
      <Grid/>
    <br />
    <br />
    <br />
    <br />
    <br />

    <h2>Fetch Details</h2>

      <button onClick={()=>dispatch(fetchadta())}>get data </button>

    </div>
  )
}

export default App