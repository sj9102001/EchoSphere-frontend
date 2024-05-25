import Image from "next/image";
import React from "react";
import Posts from "./Posts";
import Friends from "./Friends";
import FriendRequests from "./FriendRequests";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
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
  const { user } = useUser();
  console.log(visitingId, user?.id);

  const isMe = parseInt(visitingId.toString()) === user?.id ? true : false;
  console.log(isMe);
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
          <Link href={"/profile#posts"} className="">
            <span className="flex justify-center">10</span>Posts
          </Link>
          <Link href={"/profile#friendList"} className="">
            <span className="flex justify-center">10</span>Friends
          </Link>
        </div>
      </div>
      <div className="flex-row space-y-2 sm:space-y-4 text-textColor border-b-[1px] border-primaryColor pb-4 sm:pb-8 overflow-ellipsis">
        {/* name */}
        <div className="font-bold  text-xl">{name}</div>
        {/* bio */}
        <p className="font-normal text-lg truncate max-w-48">{bio}</p>
        {/*buttons */}
        {isMe && (
          <button className="focus:outline-none text-textColor font-medium rounded-lg text-md px-5 py-1 my-2 mr-2 bg-primaryColor hover:bg-secAccentColor focus:ring-accentColor transition-colors duration-300 ease-in-out">
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
