import React from "react";
import "/src/index.css";
export default function ProfileCard() {
  return (
    <div className="w-full border rounded-lg px-2 py-4">
      <h1>Welcome Kelvin</h1>
      <div className="flex justify-between">
        <p>current balance: $4000</p>
        <button
          className="bg-gray-300 btn rounded-lg text-sm px-2"
          type="submit"
          onClick={() => window.my_modal_1.showModal()}
        >
          Add Money
        </button>
        <dialog id="my_modal_1" className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </div>
          </form>
        </dialog>
      </div>

      <p>spending behaviour: stingy</p>
    </div>
  );
}
