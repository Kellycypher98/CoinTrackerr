/* eslint-disable no-unused-vars */
import React from "react";
import "/src/index.css";

export default function ExpenseIncome() {
  return (
    <div className="border flex flex-col w-full rounded-lg">
      <div className="flex flex-col md:flex-row divide-y md:divide-x">
        <button className="w-full md:w-2/4 bg-gray-100 py-3 md:py-5">
          Expense
        </button>
        <button className="w-full md:w-2/4 bg-gray-100 py-3 md:py-5">
          Income
        </button>
      </div>
      <div>
        <h1 className="text-center p-5">Add transaction</h1>
        <form className="flex flex-col gap-5 p-5">
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
            <button className="border px-2 rounded-lg">Add expense</button>
          </div>
        </form>

        {/*<form className="flex flex-col gap-5 p-5">
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
            <button className="border p-2 rounded-lg">Add expenses</button>
          </div>
        </form>*/}
      </div>
    </div>
  );
}
