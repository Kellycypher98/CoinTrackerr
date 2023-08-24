import React from "react";
import { useAppContext } from "./../../contexts/AppContext";
import "./../../index.css";

export default function ExpenseIncome({ currentBalance, setCurrentBalance }) {
  const { addTransaction } = useAppContext();
  const [activeForm, setActiveForm] = React.useState("expense");
  const [formData, setFormData] = React.useState({
    from: "",
    amount: "",
    purpose: "",
    date: "",
    notes: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const transaction = {
      from: formData.from,
      amount: formData.amount,
      purpose: formData.purpose,
      date: formData.date,
      notes: formData.notes,
    };

    const parsedAmount = parseFloat(formData.amount);

    if (activeForm === "expense") {
      setCurrentBalance((prevBalance) => prevBalance - parsedAmount);
      transaction.amount = -parsedAmount;
    } else if (activeForm === "income") {
      setCurrentBalance((prevBalance) => prevBalance + parsedAmount);
      transaction.amount = parsedAmount;
    }

    addTransaction(transaction);

    setFormData({
      from: "",
      currency: "",
      purpose: "",
      date: "",
      notes: "",
      amount: 0,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "amount") {
      const parsedAmount = parseFloat(value);

      if (!isNaN(parsedAmount)) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: parseFloat(value), // Parse the value to a float
        }));
      } else {
        // Handle invalid input (non-numeric value)
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const expenseClicked = () => {
    setActiveForm("expense");
  };

  const incomeClicked = () => {
    setActiveForm("income");
  };

  return (
    <div className="border flex flex-col w-full rounded-lg shadow-lg">
      <div className="flex flex-row divide-y md:divide-x">
        <button
          className="w-full md:w-2/4 bg-gray-100 py-3 md:py-5 hover:bg-gray-300 active:bg-violet-700 focus:outline-none focus:ring focus:ring-gray-300 "
          onClick={expenseClicked}
        >
          Expense
        </button>
        <button
          className="w-full md:w-2/4 bg-gray-100 py-3 md:py-5 active:bg-violet-700 focus:outline-none focus:ring focus:ring-gray-300 "
          onClick={incomeClicked}
        >
          Income
        </button>
      </div>
      <div>
        {activeForm === "expense" && (
          <form className="flex flex-col gap-5 p-5" onSubmit={handleFormSubmit}>
            <h1 className="text-center p-5">Expense</h1>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col w-full md:w-3/4 gap-2">
                <label className="block">From</label>
                <input
                  type="select"
                  className="border p-2 rounded-lg"
                  name="from"
                  value={formData.from}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col w-full md:w-1/4 gap-2">
                <label htmlFor="Currency">Amount</label>
                <input
                  type="number"
                  className="border p-2 rounded-lg"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col w-full md:w-3/4 gap-2">
                <label>Purpose</label>
                <input
                  type="text"
                  className="border p-2 rounded-lg"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col w-full md:w-1/4 gap-2">
                <label>Date</label>
                <input
                  type="date"
                  className="border p-2 rounded-lg"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <input
                type="text"
                placeholder="notes"
                className="border p-2 rounded-lg w-full md:w-3/4"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
              />
              <button
                className="border px-2 rounded-lg bg-blue-400 hover:bg-blue-500 text-white"
                type="submit"
              >
                Add expense
              </button>
            </div>
          </form>
        )}

        {activeForm === "income" && (
          <form
            className="flex flex-col gap-5 p-5 "
            onSubmit={handleFormSubmit}
          >
            <h1 className="text-center p-5">Income</h1>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col w-full md:w-3/4 gap-2">
                <label className="block">To</label>
                <input
                  type="select"
                  className="border p-2 rounded-lg"
                  name="from"
                  value={formData.from}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col w-full md:w-1/4 gap-2">
                <label htmlFor="Currency">USD</label>
                <input
                  type="number"
                  className="border p-2 rounded-lg"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col w-full md:w-3/4 gap-2">
                <label>Purpose</label>
                <input
                  type="text"
                  className="border p-2 rounded-lg"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col w-full md:w-1/4 gap-2">
                <label>Date</label>
                <input
                  type="date"
                  className="border p-2 rounded-lg"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <input
                type="text"
                placeholder="notes"
                className="border p-2 rounded-lg w-full md:w-3/4"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
              />
              <button
                className="border px-2 rounded-lg bg-blue-400 hover:bg-blue-500 text-white"
                type="submit"
              >
                Add income
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
