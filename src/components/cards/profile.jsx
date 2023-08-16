import React from "react";
import "/src/index.css";
export default function ProfileCard() {
  const [currentBalance, setCurrentBalance] = React.useState(0); // Initial current balance

  const handleAddMoney = (amount) => {
    setCurrentBalance((prevBalance) => prevBalance + amount);
  };

  const handleExpenseFormSubmit = (event) => {
    event.preventDefault();
    const amount = parseFloat(formData.amount); // Extract amount from formData
    if (!isNaN(amount)) {
      handleAddMoney(amount);
      const dialog = document.getElementById("my_modal_3");
      dialog.close(); // Close the dialog
    } else {
      // Handle invalid input (non-numeric value)
    }
  };
  return (
    <div className="w-full border rounded-lg px-2 py-4">
      <h1>Welcome Kelvin</h1>
      <div className="flex justify-between">
        <p>current balance:${currentBalance.toFixed(2)}</p>
        <button
          className="bg-gray-300 btn rounded-lg text-sm px-2"
          type="submit"
          onClick={() => window.my_modal_3.showModal()}
        >
          Add Money
        </button>
        <dialog id="my_modal_3" className="modal">
          <form
            method="dialog"
            className="modal-box flex flex-col gap-5 p-5"
            onSubmit={handleExpenseFormSubmit}
          >
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => dialog.close()}
            >
              ✕
            </button>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col w-full md:w-3/4 gap-2">
                <label className="block">From</label>
                <input type="select" className="border p-2 rounded-lg" />
              </div>
              <div className="flex flex-col w-full md:w-1/4 gap-2">
                <label htmlFor="Currency">USD</label>
                <input
                  type="number"
                  className="border p-2 rounded-lg"
                  name="Currency"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col w-full md:w-3/4 gap-2">
                <label>Purpose</label>
                <input type="text" className="border p-2 rounded-lg" />
              </div>
              <div className="flex flex-col w-full md:w-1/4 gap-2">
                <label>Date</label>
                <input type="date" className="border p-2 rounded-lg" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <input
                type="text"
                placeholder="notes"
                className="border p-2 rounded-lg w-full md:w-3/4"
              />
              <button className="border px-2 rounded-lg" type="submit">
                Add expense
              </button>
            </div>
          </form>
        </dialog>
      </div>

      <p>spending behaviour: stingy</p>
    </div>
  );
}
