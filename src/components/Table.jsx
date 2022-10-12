import React, { useEffect, useState } from "react";
import generatePDF from "../Modules/generatePDF";
const Table = ({ paymentHistory }) => {
  // let [paymentHistory, setPaymentHistory] = useState([]);

  // useEffect(() => {
  //   const fetchPaymentData = async () => {
  //     let Data = await axios.get("history");
  //     setPaymentHistory(Data.data);
  //     console.log(`Payment history ready ==>${JSON.stringify(paymentHistory)}`);
  //   };
  //   fetchPaymentData();
  // }, []);

  return (
    <>
      <div className="flex flex-col align-center overflow-x-auto relative shadow-md sm:rounded-lg">
        <div className="w-full  bg-red-100">
          <button
            onClick={() => {
              generatePDF(paymentHistory);
            }}
            className=" w-full bg-cyan-400 m-3 py-2 hover:bg-cyan-600"
          >
            Generate PDF
          </button>
        </div>
        <table class="w-full text-sm text-left">
          <thead>
            <tr>
              <th className="py-3 px-2  bg-green-600">Item</th>
              <th className="py-3 px-6 bg-green-600">Receipt No</th>
              <th className="py-3 px-6  bg-green-600">FName</th>
              <th className="py-3 px-8  bg-green-600">Contact</th>
              <th className="py-3 px-6  bg-green-600">LName</th>
              <th className="py-3 px-10 bg-green-600">Transaction Date</th>
            </tr>
          </thead>
          <tbody className="mb-6">
            {paymentHistory.map((history, index) => {
              let {
                phoneNumber: contact,
                fName,
                lName,
                mpesaReceiptNumber: receiptNo,
                transactionDate,
              } = history;
              return (
                <tr key={`${index}`}>
                  <td className="py-3 px-2">{`${index + 1}`}</td>
                  <td className="py-3 px-6 bg-green-100">{receiptNo}</td>
                  <td className="py-3 px-6">{fName}</td>
                  <td className="py-3 px-6  bg-green-100">{contact}</td>
                  <td className="py-3 px-6">{lName}</td>
                  <td className="py-3 px-10 bg-green-100">{transactionDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
