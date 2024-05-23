import SearchModal from "./SearchModal";
import { useState } from "react";
import SearchResults from "./SearchResults";

export default function ModalButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Search</button>
      {showModal && (
        <SearchModal onClose={() => setShowModal(false)}>
          <div className="flex w-full justify-center items-center">
            {/* Searchbar */}
            <div className="relative border border-accentColor w-4/5 focus-within:border-2  overflow-hidden mt-2 rounded-xl">
              <svg
                className="absolute top-1/2 left-6 h-6 w-5 transform -translate-y-1/2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g clip-path="url(#clip0_15_152)">
                    {" "}
                    <circle
                      cx="10.5"
                      cy="10.5"
                      r="6.5"
                      stroke="#f3e3d3"
                      stroke-linejoin="round"
                    ></circle>{" "}
                    <path
                      d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z"
                      fill="#f3e3d3"
                    ></path>{" "}
                  </g>{" "}
                  <defs>
                    {" "}
                    <clipPath id="clip0_15_152">
                      {" "}
                      <rect width="24" height="24" fill="white"></rect>{" "}
                    </clipPath>{" "}
                  </defs>{" "}
                </g>
              </svg>
              <input
                className="pl-14 pr-6 py-[6px] text-textColor w-full placeholder-textColor font-light outline-none bg-transparent"
                type="search"
                placeholder="Search People, Posts, Tags..."
              />
            </div>
          </div>
          <div className="h-1/2 overflow-auto ">
            <SearchResults />
          </div>
        </SearchModal>
      )}
    </div>
  );
}