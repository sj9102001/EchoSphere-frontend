import { showErrorToast } from "@/ui/Toast";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const SearchResults = ({ results, query, closeModal }: {
  results: {
    showMore: boolean,
    searchList: [{
      id: number,
      imageUrl: "/favicon.ico",
      name: string,
      bio: string | null
    }] | null
  } | null,
  query: string,
  closeModal: () => void
}) => {
  const [resultsToShow, setResultsToShow] = useState<[{
    id: number,
    imageUrl: '/favicon.ico',
    name: string,
    bio: string | null
  }] | null>(results === null ? null : results.searchList);
  const router = useRouter();
  const [skipCount, setSkipCount] = useState<number>(4);
  const [showMore, setShowMore] = useState<boolean>(results ? results.showMore : false);
  if (results === null) {
    return <div className="flex justify-center items-center h-80">
      <h2>No results to show</h2>
    </div>
  }

  const fetchMore = async () => {
    try {
      const res = await fetch('http://localhost:8080/user/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: query, skip: skipCount }),
      });

      const data = await res.json();
      if (data.searchList) {
        setResultsToShow(prevResults => (prevResults ? [...prevResults, ...data.searchList] : data.searchList));
        setShowMore(data.showLoadMore);
      } else {
        showErrorToast("Cannot fetch more");
      }
      setSkipCount(prevSkipCount => prevSkipCount + 4);
    } catch (error) {
      console.log(error);
    }
  }

  const navigateToProfile = (id: number) => {
    router.push(`/profile/${id}`);
    closeModal()
  }

  return (
    <div className="max-h-80 overflow-auto mt-8 scroll-p-10 no-scrollbar">
      <ul className="w-full flex-col text-textColor space-y-4">
        {resultsToShow!.map((result) => (
          <li
            key={result.id}
            onClick={() => navigateToProfile(result.id)}
            className="flex justify-between items-center bg-secondaryColor rounded-xl py-2 mx-6 pl-2 group pr-4 hover:bg-slate-600 transition-colors duration-300 ease-in-out shadow-[2.0px_6.0px_8.0px_rgba(0,0,0,0.38)]"
          >
            <div className="flex gap-4 items-center">
              <Image
                src={'/favicon.ico'}
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
      <div className="flex justify-center pt-4">
        {showMore && <button
          onClick={fetchMore}
          className="rounded-md text-sm px-3 py-1 bg-secondaryColor hover:bg-secAccentColor transition duration-300 ease-in-out border-slate-600 border-[1px] group-hover:border-secAccentColor"
        >
          Load More
        </button>}
      </div>
    </div>
  );
};
export default SearchResults;
