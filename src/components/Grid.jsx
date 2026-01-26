import { useDispatch, useSelector } from "react-redux";
import { fetchGif, fetchPhotos } from "../api/media.api";
import {
  setQuery,
  setloading,
  setError,
  setResults,
} from "../app/features/search";
import { useEffect } from "react";
import { data } from "react-router-dom";
import Card from "./Card";

function Grid() {
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (state) => state.search,
  );

  useEffect(() => {
    const fetchData = async () => {
      let data = [];

      if (query === "") return;

      if (activeTab === "photos") {
        const res = await fetchPhotos(query);
        data = res;
      } else if (activeTab === "gif") {
        const res = await fetchGif(query);
        data = res;
      }
      dispatch(setResults(data));
    };

    fetchData();
  }, [query, activeTab]);

  return (
    <div className="flex flex-wrap gap-2 justify-center  px-5">
      {results.map((obj, idx) => {
        return (
          <div key={idx}>
            <Card obj={obj} />
          </div>
        );
      })}
    </div>
  );
}

export default Grid;
