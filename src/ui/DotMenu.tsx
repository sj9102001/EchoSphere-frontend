import React, { useState } from "react";

const DotMenu = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  function toggleSidebar() {
    setShowSidebar((prevState) => {
      return !prevState;
    });
  }
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleSidebar}
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibol shadow-sm ring-1 ring-inset "
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {!showSidebar && (
            <svg
              fill="#f3e3d3"
              width="20px"
              height="20px"
              viewBox="0 0 32 32"
              enable-background="new 0 0 32 32"
              id="Glyph"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13,16c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,14.346,13,16z"
                id="XMLID_294_"
              />
              <path
                d="M13,26c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,24.346,13,26z"
                id="XMLID_295_"
              />
              <path
                d="M13,6c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,4.346,13,6z"
                id="XMLID_297_"
              />
            </svg>
          )}
          {showSidebar && (
            <svg
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M7 17L16.8995 7.10051"
                  stroke="#f3e3d3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M7 7.00001L16.8995 16.8995"
                  stroke="#f3e3d3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
              </g>
            </svg>
          )}
        </button>
      </div>
      {showSidebar && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-secondaryColor shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-textColor block px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-0"
            >
              Remove
            </a>
            <a
              href="#"
              className="text-errorColor block px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-1"
            >
              Block
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
export default DotMenu;
