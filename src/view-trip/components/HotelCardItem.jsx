import { GetPlaceDetails } from "@/service/GlobalAPI";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PHOTO_REF_URL = 'https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key=' + import.meta.env.VITE_GOOGLE_PLACE_API_KEY;

function HotelCardItem({ hotel }) {
    const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    hotel && GetPlacePhoto();
  }, [hotel]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: hotel?.HotelName
    }
    const result = await GetPlaceDetails(data).then(resp=>{
      console.log(resp.data.places[0].photos[3].name);

      const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name);
      console.log(PhotoUrl);
      setPhotoUrl(PhotoUrl);
    })
  }
  return (
    <Link
      to={
        "https://www.google.com/maps/search/?api=1&query=" +
        hotel?.HotelName +
        "," +
        hotel?.HotelAddress
      }
      target="_blank"
    >
      <div className="hover:scale-105 transition-all cursor-pointer">
        <img src={photoUrl?photoUrl: '/placeholder.jpg'} className="rounded-lg h-[180px] w-full object-cover" />
        <div className="my-2 flex flex-col gap-2">
          <h2 className="font-medium text-black">{hotel?.HotelName}</h2>
          <h2 className="text-xs text-gray-500">📍 {hotel?.HotelAddress}</h2>
          <h2 className="text-sm text-black">💰 {hotel?.Price}</h2>
          <h2 className="text-sm text-black">⭐ {hotel?.Rating}</h2>
        </div>
      </div>
    </Link>
  );
}

export default HotelCardItem;
