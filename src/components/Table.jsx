import React, { useEffect, useState } from "react";
import generatePDF from "../modules/generatePDF";
const Table = ({ paymentHistory }) => {
  return (
    <>
      {/* <div className="flex flex-col align-center overflow-x-auto relative shadow-md sm:rounded-lg"> */}
      <button
        onClick={() => {
          generatePDF(paymentHistory, "tenantPaymentHistory");
        }}
        className=" w-48 rounded-md bg-blue-500 text-white m-3 py-2 hover:bg-cyan-600"
      >
        Generate PDF
      </button>
      <h1 className="text-slate-500 font-bold text-xl text-center border-2  ">
        TABLE COME
      </h1>
      <table className=" table-fixed w-full text-sm text-left">
        <thead className="text-white uppercase py-4 border-2 border-red-600">
          <tr>
            <th className=" w-12 border-2 px-2  bg-blue-700">Item</th>
            <th className=" w-36 border-2 px-6 bg-blue-700">Receipt No</th>
            <th className=" w-36 border-2 px-6  bg-blue-700">FName</th>
            <th className=" w-36 border-2 px-8  bg-blue-700">Contact</th>
            <th className=" w-36 border-2 px-6  bg-blue-700">LName</th>
            <th className=" w-48 border-2 px-10 bg-blue-700">
              Transaction Date
            </th>
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
              <tr className="py-1" key={`${index} `}>
                <td className=" px-2">{`${index + 1}`}</td>
                <td className=" px-6 bg-green-100">{receiptNo}</td>
                <td className=" px-6">{fName}</td>
                <td className=" px-6  bg-green-100">{contact}</td>
                <td className=" px-6">{lName}</td>
                <td className=" px-10 bg-green-100">{transactionDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* </div> */}
    </>
  );
};

export default Table;
