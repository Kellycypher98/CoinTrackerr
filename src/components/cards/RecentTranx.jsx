/* eslint-disable no-unused-vars */
import React from "react";
import "/src/index.css";
import { useAppContext } from "./../../contexts/AppContext";

export default function RecentTranx() {
  const { transactions } = useAppContext();

  return (
    <div className="overflow-x-auto shadow-lg">
      <table className="w-full rounded-lg">
        <thead>
          <tr className="bg-gray-100 ">
            <th className="p-2">Date</th>
            <th className="p-2">Account</th>
            <th className="p-2">Purpose</th>
            <th className="p-2">Transaction Type</th>
            <th className="p-2">Amount</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className="text-center">
              <td className="p-2">{transaction.date}</td>
              <td className="p-2">{transaction.from}</td>
              <td className="p-2">{transaction.purpose}</td>
              <td className="p-2">
                {transaction.amount < 0 ? "Debit" : "Credit"}
              </td>
              <td className="p-2">{transaction.amount}</td>
              <td className="p-2">
                <button className="border p-1 rounded-lg">edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
