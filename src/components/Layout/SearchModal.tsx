import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const SearchModal: React.FC<ModalProps> = ({ onClose, children, title }) => {
  const [isClient, setIsClient] = useState(false);
  const modalWrapperRef = useRef<HTMLDivElement>(null);

  const backDropHandler = useCallback(
    (e: MouseEvent) => {
      if (
        modalWrapperRef.current &&
        !modalWrapperRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      setTimeout(() => {
        window.addEventListener("click", backDropHandler);
      }, 0);

      return () => {
        window.removeEventListener("click", backDropHandler);
      };
    }
  }, [isClient, backDropHandler]);

  const handleCloseClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClose();
  };

  if (!isClient) {
    return null;
  }

  const modalContent = (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      {/* modal */}
      <div
        ref={modalWrapperRef}
        className="w-2/3 h-2/3 sm:w-3/5 sm:max-w-96 lg:max-w-full lg:w-2/5 rounded-xl shadow-[0px_0px_20.0px_rgba(192,93,74,0.4)]"
      >
        <div className="bg-primaryColor h-full w-full rounded-xl py-2 flex-col  ">
          {/* close button */}
          <div className="flex justify-between items-center border-b-2 border-secondaryColor pr-4 pb-2">
            <div className="text-end text-textColor w-1/2 font-semibold text-xl ml-6">
              Search
            </div>
            <div className="flex items-end justify-end"></div>
            <a href="#" onClick={handleCloseClick}>
              <svg
                width="2rem"
                height="2rem"
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
            </a>
          </div>
          {title && <h1 className="text-xl font-bold">{title}</h1>}
          <div className="pt-2">{children}</div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default SearchModal;
