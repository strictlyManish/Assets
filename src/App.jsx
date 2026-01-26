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
    <div className="bg-gray-300 text-white min-h-screen w-full overflow-x-hidden">
      <div
        className="fixed top-0 left-0 w-full h-16 sm:h-18 md:h-20 bg-transparent backdrop-blur-xl flex items-center justify-center z-1 px-4"
      >
        <Search />
      </div>

      {/* Page Content */}
      <div className="pt-16 sm:pt-18 md:pt-20">
        <Tab />
        <Grid />
      </div>
    </div>
  );
}

export default App;
