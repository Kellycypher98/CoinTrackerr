import React, { useState } from "react";
import "/src/index.css";
import { useAppContext } from "./../../contexts/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

export default function ProfileCard({ currentBalance, setCurrentBalance }) {
  // Initial current balance
  const [enteredAmount, setEnteredAmount] = useState(0); // Amount entered in the form

  const handleAddMoney = () => {
    setCurrentBalance((prevBalance) => prevBalance + enteredAmount);
    setEnteredAmount(0); // Reset the entered amount after updating the balance
    const dialog = document.getElementById("my_modal_3");
    dialog.close(); // Close the dialog
  };

  return (
    <div className="w-full border rounded-lg px-2 py-4 shadow-lg">
      <h1>Welcome user </h1>
      <div className="flex justify-between">
        <p>current balance: ${currentBalance.toFixed(2)}</p>
        <button
          className="bg-gray-300 btn rounded-lg text-sm "
          type="button"
          onClick={() => window.my_modal_3.showModal()}
        >
          Add <FontAwesomeIcon icon={faWallet} />
        </button>
        <dialog id="my_modal_3" className="modal ">
          <form method="dialog" className="modal-box flex flex-col gap-5 p-5">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col w-full gap-2">
                <label className="block">Amount</label>
                <input
                  type="number"
                  className="border p-2 rounded-lg"
                  value={enteredAmount}
                  onChange={(e) => setEnteredAmount(parseFloat(e.target.value))}
                />
              </div>
            </div>
            <button
              className="border px-2 bg-blue-300 text-white  rounded-lg"
              type="button"
              onClick={handleAddMoney}
            >
              Add Money
            </button>
          </form>
        </dialog>
      </div>
      <p>spending behavior: unknown</p>
    </div>
  );
}
