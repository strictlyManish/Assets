import { Download } from 'lucide-react';
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
        duration-300 relative
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
 
        <button className="text-xs bg-pink-600 text-white block px-3 py-1 rounded-full absolute bottom-5 right-5">
          Save <span><Download/></span>
        </button>
      </div>
    
  );
}


export default Card