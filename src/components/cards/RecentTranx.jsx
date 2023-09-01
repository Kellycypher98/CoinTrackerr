/* eslint-disable no-unused-vars */
import React from "react";
import "/src/index.css";
import { useAppContext } from "./../../contexts/AppContext";

export default function RecentTranx() {
  const { transactions } = useAppContext();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

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
                <button
                  className="btn"
                  onClick={() => window.my_modal_3.showModal()}
                >
                  open modal
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <dialog id="my_moda_3" className="modal-2">
            <form method="dialog" className="modal-box">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click on ✕ button to close
              </p>
            </form>
          </dialog>
        </div>
      )}
    </div>
  );
}
