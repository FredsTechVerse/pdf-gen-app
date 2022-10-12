import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
// GENERATING THE PDF
//=====================
// It works with nested arrays where each nested array signifies a row which is then mapped to fit each column. Simple.

// STEP 1 : Defination of Function to accept data.
const generatePDF = (argumentz) => {
  // STEP 2 : Initialization of jsPDF
  const doc = new jsPDF();

  // STEP 3 : Defination of the columns as an Array datatype.
  const tableColumn = [
    "Receipt No",
    "FName",
    "Contact",
    "LName",
    "Transaction Date",
  ];
  // STEP 4 : Define an empty array, members signify the rows.
  const tableRows = [];

  // PUSHING INTO THE ARRAY TO FORM NESTED ARRAY REP ROWS
  argumentz.forEach((argument) => {
    const row = [
      argument.mpesaReceiptNumber,
      argument.fName,
      argument.phoneNumber,
      argument.lName,
      argument.transactionDate,
    ];
    // Adding each row at the end of the tableRows array.
    tableRows.push(row);
  });
  //   STEP 5 : Inititalization of the rows and columns alongside styling to the table.
  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    theme: "plain",
    margin: { top: 14, left: 15 },
    headStyles: {
      textColor: "white",
      fillColor: [43, 173, 38],
      fontStyle: "bold",
      halign: "center",
      fontSize: 12,
    },
    bodyStyles: {
      halign: "center",
      cellPadding: 2,
    },
    columnStyles: {
      0: { fillColor: [168, 255, 164] },
      2: { fillColor: [168, 255, 164] },
      4: { fillColor: [168, 255, 164] },
    },
  });
  // argument title. and margin-top + margin-left
  // doc.text("PAYMENT SUMMARY DARAJA 2.0");
  // e define the name of our PDF file.
  doc.save(`Payment_Report.pdf`);
};

export default generatePDF;
