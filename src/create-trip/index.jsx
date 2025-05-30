import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelersList
} from "@/constants/options";
import { chatSession } from "@/service/AIModal";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import { useNavigate } from "react-router-dom";

function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState();
  const [openDialogue, setOpenDialogue] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    if (name == "noOfDays" && value > 7) {
      console.log("Please enter trip days < 8");
      return;
    }
    setFormData({
      ...formData,
      [name]: value
    });
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error)
  });

  const OnGenerateTrip = async () => {
    const user = localStorage.getItem("user");

    if (!user) {
      setOpenDialogue(true);
      return;
    }

    if (
      formData?.noOfDays > 7 ||
      !formData?.location ||
      !formData?.budget ||
      !formData?.travellers
    ) {
      toast("Please fill all details and check that the number of days is < 8");
      return;
    }
    setLoading(true);

    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      formData?.location?.label
    )
      .replace("{totalDays}", formData?.noOfDays)
      .replace("{travellers}", formData?.travellers)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.noOfDays);

    const result = await chatSession.sendMessage(FINAL_PROMPT);

    console.log(result?.response?.text());
    setLoading(false);
    SaveAiTrip(result?.response?.text());
  };

  const SaveAiTrip = async (TripData) => {
    setLoading(true);
    const docId = Date.now().toString();
    const user = JSON.parse(localStorage.getItem("user"));
    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docId
    });
    setLoading(false);
    navigate('/view-trip/' + docId);
  };

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "application/json"
          }
        }
      )
      .then((resp) => {
        const userData = resp.data;
        console.log("User profile:", userData);
        localStorage.setItem("user", JSON.stringify(userData));
        setOpenDialogue(false);
        OnGenerateTrip();
      })
      .catch((err) => {
        console.error(
          "Error fetching user profile:",
          err.response?.data || err.message
        );
      });
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-45 px-5 mt-10">
      <h2 className="font-bold text-3xl">
        Tell us your travel preferences🏕️🌴
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customised itinerary based on your preferences.
      </p>

      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is destination of choice?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v);
              }
            }}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning your trip?
          </h2>
          <Input
            placeholder={"Ex.3"}
            type="number"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl mt-10 font-medium">What is your Budget?</h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectBudgetOptions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("budget", item.title)}
              className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${
                formData?.budget == item.title && "shadow-lg border-black"
              }`}
            >
              <h2 className="text-4xl">{item.id}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl mt-10 font-medium">
          Who do you plan to travel with on your next adventure?
        </h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectTravelersList.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("travellers", item.people)}
              className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${
                formData?.travellers == item.people && "shadow-lg border-black"
              }`}
            >
              <h2 className="text-4xl">{item.id}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="my-14 justify-end flex">
        <Button disabled={loading} onClick={OnGenerateTrip}>
          {loading ? (
            <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
          ) : (
            "Generate Trip"
          )}
        </Button>
      </div>

      <Dialog open={openDialogue}>
        <DialogContent>
          <DialogTitle>Not Signed In!</DialogTitle>
          <DialogHeader>
            <DialogDescription>
              <img src="/TripWise-logo.svg" />
              <h2 className="font-bold text-lg mt-7">Sign In with Google</h2>
              <h4>Sign in to the app with google authentication securely</h4>
              <Button
                onClick={login}
                className="w-full mt-5 flex gap-4 items-center"
              >
                <FcGoogle className="h-7 w-7" />
                Sign in with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateTrip;
