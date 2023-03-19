import React, { useState } from "react";
import RegisterNowButton from "./RegisterNowButton";
import RsvpForm from "./RsvpForm";
import { Button} from "flowbite-react";

function RegisterModal({buttonText}) {
  const [showModal, setShowModal] = useState(false);

  const toggleShow = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div onClick={toggleShow}>
        <RegisterNowButton text={buttonText ?? null}/>
      </div>

      {/* full screen overlay */}
      {showModal && (
        <>
          <div className="fixed top-0 right-0 w-[100vw] h-screen bg-slate-600 bg-opacity-50 flex justify-center items-center z-20">
            {/* Modal content */}
            <div className="bg-white text-black p-2 rounded-xl min-w-[300px] min-h-[300px] flex flex-col justify-evenly items-center">
              <h1 className="font-bold text-xl">Tinkerthon Registration</h1>
              <RsvpForm toggleShowModal={toggleShow} />
              <Button color={"failure"} onClick={toggleShow}>
                Close
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default RegisterModal;
