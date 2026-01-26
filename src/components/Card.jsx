function Card({ obj }) {
  return (
    <div
      className="
      mt-2
        w-full
        break-inside-avoid
        bg-white
        rounded-xl
        overflow-hidden
        shadow-md
        hover:shadow-lg
        transition-shadow
        duration-300
      "
    >
      <a target="_blank" rel="noopener noreferrer" href={obj.url}>
        {obj.type === "photo" && (
          <img
            className="w-full h-auto object-cover"
            src={obj.full}
            alt={obj.title}
            loading="lazy"
          />
        )}

        {obj.type === "video" && (
          <video
            className="w-full h-auto object-cover"
            autoPlay
            loop
            muted
            playsInline
            src={obj.src}
          />
        )}

        {obj.type === "gif" && (
          <img
            className="w-full h-auto object-cover" src={obj.src} alt="" />
        )}
      </a>

      {/* Overlay */}
      <div className="p-3 flex justify-between items-start gap-3">
        <h2 className="text-sm font-semibold capitalize line-clamp-2">
          {obj.title}
        </h2>

        <button className="text-xs bg-gray-800 text-white px-3 py-1 rounded-full">
          Save
        </button>
      </div>
    </div>
  );
}


export default Card