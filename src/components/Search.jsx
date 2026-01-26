import { useForm } from "react-hook-form";
import { setQuery } from "../app/features/search";
import { useDispatch } from "react-redux";

function Search() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(setQuery(data.query));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md ">
      <div className="flex items-center border pl-4 gap-2 bg-gray-800 border-gray-500/30 h-[46px] rounded-full overflow-hidden w-full">
        
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
          className="bg-pink-600 w-32 h-9 rounded-full text-sm text-white mr-1.25"
        >
          Search
        </button>
      </div>

      {errors.query && (
        <p className="mt-1 ml-4 text-xs text-pink-400">
          {errors.query.message}
        </p>
      )}
    </form>
  );
}

export default Search