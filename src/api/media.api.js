import axios from "axios";

const unsplacesKEY = import.meta.env.VITE_UNSPLACESS_KEY;
const pexelsKEY = import.meta.env.VITE_PEXELS_KEY;
const pixiKEY = import.meta.env.VITE_PIXIBAY_KEY;

export async function fetchPhotos(query, page = 1, per_page = 20) {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${unsplacesKEY}` },
  });

  return res.data.results.map((obj)=>({
    id: obj.id,
    type:'photo',
    full: obj.urls.full,
    thumb: obj.urls.thumb,
    description: obj.description || obj.alt_description || "",
  }));
}

export async function fetchVideo(query, per_page = 20) {
  const res = await axios.get("https://api.pexels.com/videos/search", {
    params: { query, per_page },
    headers: { Authorization: `Client-ID ${pexelsKEY}` },
  });

  return res.data.map((obj)=>{
    console.log(obj)
  })
}

export async function fetchGif(query) {
  const res = await axios.get(
    `https://pixabay.com/api/?key=${pixiKEY}&q=${query}`,
  );

  return res.data.hits.map((obj) => ({
    largeImageURL: obj.largeImageURL,
    previewURL: obj.previewURL,
    imageHeight: obj.imageHeight,
    imageWidth: obj.imageWidth,
  }));
}
