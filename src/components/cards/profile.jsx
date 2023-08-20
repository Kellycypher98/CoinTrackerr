import React, { useState } from "react";
import "/src/index.css";
import { useAppContext } from "./../../contexts/AppContext";

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
    <div className="w-full border rounded-lg px-2 py-4">
      <h1>Welcome Kelvin</h1>
      <div className="flex justify-between">
        <p>current balance: ${currentBalance.toFixed(2)}</p>
        <button
          className="bg-gray-300 btn rounded-lg text-sm px-2"
          type="button"
          onClick={() => window.my_modal_3.showModal()}
        >
          Add Money
        </button>
        <dialog id="my_modal_3" className="modal">
          <form method="dialog" className="modal-box flex flex-col gap-5 p-5">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col w-full md:w-3/4 gap-2">
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
              className="border px-2 rounded-lg"
              type="button"
              onClick={handleAddMoney}
            >
              Add Money
            </button>
          </form>
        </dialog>
      </div>
      <p>spending behavior: stingy</p>
    </div>
  );
}
