import React, { useState } from "react";
import RegisterNowButton from "./RegisterNowButton";
import RsvpForm from "./RsvpForm";
import Xicon from "../assets/icons/Xicon.svg";
import { Button } from "flowbite-react";

function RegisterModal() {
  const [showModal, setShowModal] = useState(false);

  const toggleShow = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div onClick={toggleShow}>
        <RegisterNowButton />
      </div>

      {/* full screen overlay */}
      {showModal && (
        <div className="fixed top-0 right-0 w-[100vw] h-screen bg-slate-600 bg-opacity-50 flex justify-center items-center">
          {/* Modal content */}
          <div className="bg-white p-2 rounded-xl min-w-[300px] min-h-[300px] flex flex-col justify-center items-center">
            <RsvpForm toggleShowModal={toggleShow}/>
            <Button color={"failure"} onClick={toggleShow}>Close</Button>
          </div>
        </div>
      )}
    </>
  );
}

export default RegisterModal;
