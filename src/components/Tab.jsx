import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../app/features/search";

function Tab() {
  const tab = ["photos", "gif", "videos"];
  const dispatch = useDispatch();
  const activeVal = useSelector((state) => state.search.activeTab);

  return (
    <div
      className="
        fixed z-50
        bottom-3 md:bottom-auto
        top-auto md:top-20
        left-1/2 -translate-x-1/2
        bg-gray-700 rounded-full
        flex gap-1
        p-1
        w-[92%] sm:w-[80%] md:w-fit
        justify-between md:justify-center
        text-xs sm:text-sm
        shadow-lg
      "
    >
      {tab.map((el, idx) => (
        <button
          key={idx}
          onClick={() => dispatch(setActiveTab(el))}
          className={`
            ${
              activeVal === el
                ? "bg-pink-600"
                : "hover:bg-gray-600"
            }
            group
            flex-1 md:flex-none
            px-3 md:px-5
            py-2
            rounded-full
            text-white
            cursor-pointer
            active:scale-95
            transition-all duration-300
          `}
        >
          <p className="relative h-5 md:h-6 overflow-hidden uppercase font-thin text-center">
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
              {el}
            </span>
            <span className="absolute inset-x-0 top-full transition-transform duration-300 group-hover:-translate-y-full">
              {el}
            </span>
          </p>
        </button>
      ))}
    </div>
  );
}

export default Tab;
