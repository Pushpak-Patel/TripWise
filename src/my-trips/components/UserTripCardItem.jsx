import { GetPlaceDetails } from '@/service/GlobalAPI';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserTripCardItem({trip}) {
    const PHOTO_REF_URL = 'https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key=' + import.meta.env.VITE_GOOGLE_PLACE_API_KEY;
    const [photoUrl, setPhotoUrl] = useState();
    useEffect(() => {
      trip && GetPlacePhoto();
    }, [trip]);
  
    const GetPlacePhoto = async () => {
      const data = {
        textQuery: trip?.userSelection?.location?.label
      }
      const result = await GetPlaceDetails(data).then(resp=>{
        console.log(resp.data.places[0].photos[3].name);
  
        const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name);
        console.log(PhotoUrl);
        setPhotoUrl(PhotoUrl);
      })
    }
  return (
    <Link to = {'/view-trip/' + trip?.id}>
    <div className='hover:scale-105 transition-all'>
      <img src={photoUrl?photoUrl : '/placeholder.jpg'} className='object-cover rounded-xl h-[220px] w-full'/>
      <div>
        <h2 className='font-bold text-lg text-black'>{trip?.userSelection?.location?.label}</h2>
        <h2 className='text-sm text-gray-600'>{trip?.userSelection?.noOfDays} Days Trip with {trip?.userSelection?.budget} Budget</h2>
      </div>
    </div>
    </Link>
  )
}

export default UserTripCardItem
