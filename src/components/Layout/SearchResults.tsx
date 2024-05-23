import Image from "next/image";
import React, { useState } from "react";

const mockResults = [
  { id: 1, name: "Person 1", imageUrl: "/favicon.ico" },
  { id: 2, name: "Person 2", imageUrl: "/favicon.ico" },
  { id: 3, name: "Person 3", imageUrl: "/favicon.ico" },
  { id: 4, name: "Person 4", imageUrl: "/favicon.ico" },
  { id: 5, name: "Person 5", imageUrl: "/favicon.ico" },
  { id: 6, name: "Person 6", imageUrl: "/favicon.ico" },
  { id: 7, name: "Person 7", imageUrl: "/favicon.ico" },
  { id: 8, name: "Person 8", imageUrl: "/favicon.ico" },
  { id: 9, name: "Person 9", imageUrl: "/favicon.ico" },
  { id: 10, name: "Person 10", imageUrl: "/favicon.ico" },
  // Add more mock results as needed
];

const SearchResults = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const resultsToShow = mockResults.slice(0, visibleCount);

  const handleShowMore = (e: React.MouseEvent) => {
    e.stopPropagation();
    setVisibleCount((prevCount) => prevCount + 4);
  };
  return (
    <div className="max-h-80 overflow-auto mt-8 scroll-p-10 no-scrollbar">
      <ul className="w-full flex-col text-textColor space-y-4">
        {resultsToShow.map((result) => (
          <li
            key={result.id}
            className="flex justify-between items-center bg-secondaryColor rounded-xl py-2 mx-6 pl-2 group pr-4 hover:bg-slate-600 transition-colors duration-300 ease-in-out shadow-[2.0px_6.0px_8.0px_rgba(0,0,0,0.38)]"
          >
            <div className="flex gap-4 items-center">
              <Image
                src={result.imageUrl}
                width={40}
                height={40}
                alt="profile picture"
              />
              <div className="font-semibold text-md pb-0.5">{result.name}</div>
            </div>
            <div>
              <button className="rounded-md text-xs px-3 py-1 bg-secondaryColor hover:bg-secAccentColor transition duration-300 ease-in-out border-slate-600 border-[1px] group-hover:border-secAccentColor">
                Add Friend
              </button>
            </div>
          </li>
        ))}
      </ul>
      {visibleCount < mockResults.length && (
        <div className="flex justify-center pt-4">
          <button
            onClick={handleShowMore}
            className="rounded-md text-sm px-3 py-1 bg-secondaryColor hover:bg-secAccentColor transition duration-300 ease-in-out border-slate-600 border-[1px] group-hover:border-secAccentColor"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};
export default SearchResults;
