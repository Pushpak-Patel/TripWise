import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [openDialogue, setOpenDialogue] = useState(false);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error)
  });

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
        window.location.reload();
      })
      .catch((err) => {
        console.error(
          "Error fetching user profile:",
          err.response?.data || err.message
        );
      });
  };

  return (
    <div className="p-3 shadow-sm flex justify-between items-center">
      <div className="gap-2 flex ml-5">
        <img src="/TripWise-logo.svg"></img>
        <div className="font-extrabold text-[20px] mt-2">TripWise</div>
      </div>
      <div className="mr-5">
        {user ? (
          <div className="flex items-center gap-3">
            <a href="/create-trip">
            <Button variant="outline" className="rounded-full text-black">
              + Create Trip
            </Button>
            </a>
            <a href="/my-trips">
            <Button variant="outline" className="rounded-full text-black">
              My Trips
            </Button>
            </a>
            <Popover>
              <PopoverTrigger>
              <img
              src={user?.picture}
              className="h-[25px] w-[25px] rounded-full"
            />
              </PopoverTrigger>
              <PopoverContent>
                <h2 className = "cursor-pointer" onClick={() => {
                  googleLogout();
                  localStorage.clear();
                  window.location.reload();
                }}>Log Out</h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setOpenDialogue(true)}>Sign In</Button>
        )}
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

export default Header;
