import { useDispatch, useSelector } from "react-redux";
import { fetchGif, fetchPhotos, fetchVideo } from "../api/media.api";
import {
  setQuery,
  setloading,
  setError,
  setResults,
} from "../app/features/search";
import { useEffect } from "react";

function Grid() {
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (state) => state.search,
  );

  useEffect(() => {
    const fetData = async () => {
      if (query !== "") {
        let data;
        if (activeTab == "photos") {
          let res = await fetchPhotos(query);
          data = res.results;
        }

        if (activeTab == "gif") {
          let res = await fetchGif(query);
          console.log(res);
        }

        if (activeTab == "videos") {
          let res = fetchVideo(query);
          data = res.videos;
        }

        console.log(data);
      }
    };

    fetData();
  }, [query, activeTab]);

  return <div>Grid</div>;
}

export default Grid;
