import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux"
import  {setQuery}  from "../app/features/search";

export default function Search() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(setQuery(data.query))
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md m-auto">
      <div className="flex items-center border pl-4 gap-2 bg-gery-800 border-gray-500/30 h-[46px] rounded-full overflow-hidden w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="#6B7280"
        >
          <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
        </svg>

        <input
          type="text"
          placeholder="Search..."
          className="w-full h-full outline-none text-sm text-gray-300"
          {...register("query", {
            required: "Search term is required",
            minLength: {
              value: 2,
              message: "Enter at least 2 characters",
            },
          })}
        />

        <button
          type="submit"
          className="bg-indigo-500 w-32 h-9 rounded-full text-sm text-white mr-1.25"
        >
          Search
        </button>
      </div>

      {/* Error message */}
      {errors.query && (
        <p className="mt-1 ml-4 text-xs text-red-500">{errors.query.message}</p>
      )}
    </form>
  );
}
