/* eslint-disable no-unused-vars */
import React from "react";
import "/src/index.css";

export default function RecentTranx() {
  return (
    <div className="overflow-x-auto">
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
          <tr className=" text-center">
            <td className="p-2">12 Aug, 2023</td>
            <td className="p-2">Kelvin</td>
            <td className="p-2">purpose</td>
            <td className="p-2">Debit</td>
            <td className="p-2">GHS 300</td>
            <td className="p-2">
              <button className="border p-1 rounded-lg">edit</button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}
