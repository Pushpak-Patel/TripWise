import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function PlacesToVisit({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-lg mt-7">Places to Visit</h2>

      <div>
        {trip.tripData?.itinerary?.map((item, index) => (
          <div key={index}>
            <h2 className="font-semibold text-lg mt-5 ">Day {item.day}</h2>
            <h2 className="font-medium text-lg text-orange-600">
              Best time to visit: {item.bestTimeToVisit}
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {item.activities?.map((place, index) => (
                <div key={index}>
                  <PlaceCardItem place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
