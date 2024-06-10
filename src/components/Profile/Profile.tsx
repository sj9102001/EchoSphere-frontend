import Image from "next/image";
import React, { useContext, useRef, useState } from "react";
import Posts from "./Posts";
import Friends from "./Friends";
import FriendRequests from "./FriendRequests";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { showErrorToast } from "@/ui/Toast";

const Profile = ({
  visitingId,
  email,
  name,
  bio,
}: {
  visitingId: number;
  name: string;
  email: string;
  bio: string | null;
}) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const bioRef = useRef<HTMLTextAreaElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState(name);
  const [userBio, setUserBio] = useState(bio);
  const { user, setUser } = useUser();
  const [showEditProfile, setShowEditProfile] = useState<boolean>(false);
  const isMe = parseInt(visitingId.toString()) === user?.id;

  const handleSave = async () => {
    if (nameRef.current && bioRef.current) {
      const updatedName = nameRef.current.value;
      const updatedBio = bioRef.current.value;

      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:8080/user/", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            bio: updatedBio,
            name: updatedName
          }),
          credentials: "include"
        });
        const data = await response.json();
        if (response.ok) {
          setUser({
            email: data.user.email,
            id: data.user.id,
            name: data.user.name,
            bio: data.user.bio,
          });
          setUsername(data.user.name);
          setUserBio(data.user.bio);
          localStorage.setItem("user", JSON.stringify(data.user));
        } else {
          throw Error();
        }
      } catch (error) {
        console.log("here");
        showErrorToast("Error Updating Profile");
      } finally {
        setIsLoading(false);
        setShowEditProfile(false);
      }

    }
  };

  return (
    <div className="flex-col h-full w-full px-8 lg:px-12">
      <div className="flex justify-start gap-20 sm:pr-12">
        {/* profile picture */}
        <div className="h-36 min-w-36 my-4 sm:my-8 flex items-center justify-center border-[1px] border-solid border-secondaryColor rounded-full overflow-hidden">
          <Image
            src="/favicon.ico"
            width={144}
            height={144}
            alt="profile picture"
          />
        </div>
        {/* posts and friends count */}
        <div className="flex justify-between text-textColor font-semibold text-lg items-center gap-20">
          <Link href={"/profile#posts"}>
            <span className="flex justify-center">10</span>Posts
          </Link>
          <Link href={"/profile#friendList"}>
            <span className="flex justify-center">10</span>Friends
          </Link>
        </div>
      </div>
      <div className="flex-row space-y-2 sm:space-y-4 text-textColor border-b-[1px] border-primaryColor pb-4 sm:pb-8 overflow-ellipsis">
        {/* name */}
        {!showEditProfile && <div className="font-bold text-xl">{username}</div>}
        {/* bio */}
        {!showEditProfile && <p className="font-normal text-lg truncate max-w-48">{userBio}</p>}
        {/*buttons */}
        {isMe && !showEditProfile && (
          <button
            onClick={() => setShowEditProfile(true)}
            className="focus:outline-none text-textColor font-medium rounded-lg text-md px-5 py-1 my-2 mr-2 bg-primaryColor hover:bg-secAccentColor focus:ring-accentColor transition-colors duration-300 ease-in-out"
          >
            Edit Profile
          </button>
        )}
        {!isMe && (
          <button className="focus:outline-none text-textColor font-medium rounded-lg text-md px-5 py-1 my-2 mr-2 bg-primaryColor hover:bg-secAccentColor focus:ring-accentColor transition-colors duration-300 ease-in-out">
            Follow
          </button>
        )}
        {!isMe && (
          <button className="focus:outline-none text-textColor font-medium rounded-lg text-md px-5 py-1 my-2 bg-primaryColor hover:bg-secAccentColor focus:ring-accentColor transition-colors duration-300 ease-in-out">
            Message
          </button>
        )}
        {showEditProfile && (
          isLoading ? <div className="flex justify-center items-center"><p>Updating...</p></div> : <div className="relative mx-auto bg-bgColor rounded-lg shadow-lg max-w-2xl p-4">
            <button
              onClick={() => setShowEditProfile(false)}
              className="absolute top-2 right-2 text-textColor text-lg font-bold focus:outline-none"
            >
              &times;
            </button>
            <p className="text-2xl font-semibold text-textColor mb-5">Edit Profile</p>
            <label className="text-primary text-sm font-bold mb-2 block">Name:</label>
            <input
              type="text"
              placeholder="Enter name..."
              defaultValue={username}
              ref={nameRef}
              className="focus:border-secAccentColor focus:outline-none focus:shadow-outline flex-grow transition duration-200 appearance-none p-2 border-2 border-gray-300 text-textColor bg-bgColor font-normal w-full h-12 text-xs rounded-md shadow-sm mb-4"
              id="name"
            />
            <label className="text-textColor text-sm font-bold mb-2 block">Bio:</label>
            <textarea
              placeholder="Enter bio..."
              defaultValue={userBio ?? ""}
              ref={bioRef}
              className="text-textColor bg-bgColor font-normal w-full h-32 text-xs rounded-md shadow-sm mb-4 focus:border-secAccentColor focus:outline-none focus:shadow-outline flex-grow transition duration-200 appearance-none p-2 border-2 border-gray-300"
              id="bio"
            ></textarea>
            <button
              type="submit"
              onClick={handleSave}
              className="inline-flex hover:bg-secAccentColor focus:outline-none justify-center rounded-md py-2 px-4 bg-primaryColor text-sm font-medium text-textColor shadow-sm"
            >
              Save
            </button>
          </div>
        )}
      </div>
      <div className="pt-4">
        <div className="flex items-center">
          <Link href={"/profile#Pst"} className="flex gap-2 py-2">
            <h1 className="focus:outline-none text-textColor rounded-full text-md h-10 w-24 flex items-center justify-center bg-primaryColor active:bg-accentColor hover:bg-secAccentColor transition-colors duration-300 ease-in-out font-semibold text-xl">
              Posts
            </h1>
            <h1 className="focus:outline-none text-textColor rounded-full text-md h-10 w-24 flex items-center justify-center bg-primaryColor active:bg-accentColor hover:bg-secAccentColor transition-colors duration-300 ease-in-out font-semibold text-xl">
              Friends
            </h1>
          </Link>
        </div>
        <Posts />
        {/* <div className="pt-4">
          <Friends />
          <FriendRequests />
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
