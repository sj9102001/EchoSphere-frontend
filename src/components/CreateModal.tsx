import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const CreateModal: React.FC<ModalProps> = ({ onClose, children }) => {
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
          <div className="flex justify-center relative border-b-2 border-secondaryColor h-11">
            <div className=" text-textColor pt-1 font-semibold text-xl">
              Create new post
            </div>

            <a
              className="absolute right-3 top-1 rounded-md text-sm px-3 py-1 bg-secondaryColor hover:bg-secAccentColor transition duration-300 ease-in-out border-slate-600 border-[1px] group-hover:border-secAccentColor"
              href="#"
              onClick={handleCloseClick}
            >
              Post
            </a>
          </div>
          <div className="pt-2 h-full">{children}</div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default CreateModal;
