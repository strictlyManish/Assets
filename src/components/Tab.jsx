import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../app/features/search";

function Tab() {
  const tab = ["photos", "gif", "videos"];

  const dispatch = useDispatch();

  const activeVal = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex space-x-2  w-fit  p-1 backdrop-blur-lg text-sm mt-5 px-5">
      {tab.map((el, idx) => {
        return (
          <button
          onClick={()=>dispatch(setActiveTab(el))}
            key={idx}
            className={` ${
              activeVal === el
                ? "bg-pink-600 backdrop-blur-3xl"
                : "hover:bg-gray-600"
            }
 group px-5 py-2 rounded-full text-white cursor-pointer active:scale-95 duration-300 hover:bg-gray-700 transition-all`}
          >
            <p className="relative h-6 overflow-hidden uppercase font-thin">
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                {el}
              </span>
              <span className="absolute w-full top-full left-1/2 -translate-x-1/2 block transition-transform duration-300 group-hover:translate-y-[-100%]">
                {el}
              </span>
            </p>
          </button>
        );
      })}
    </div>
  );
}

export default Tab;
