import { useDispatch } from "react-redux";
import Grid from "./components/Grid";
import Search from "./components/Search";
import Tab from "./components/Tab";
import { fetchPhotos, fetchVideo } from "./api/media.api";

function App() {
  const dispatch = useDispatch();

  const fetchadta = async () => {
    let res = await fetchPhotos("apple");
    console.log(res);
  };

  return (
    <div className="bg-gray-100 text-white w-full h-screen">
      <div className="fixed top-0 h-22 bg-transparent backdrop-blur-xl w-screen flex items-center justify-center z-1">
        <Search />
      </div>
      <Tab />
      <Grid />
    </div>
  );
}

export default App;
