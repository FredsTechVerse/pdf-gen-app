import { useState, useEffect } from "react";
import axios from "./Axios";
import Table from "./components/Table";
import "./App.css";

function App() {
  let [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    const paymentData = async () => {
      let { data } = await axios.get("history");
      setPaymentHistory(data);
      // console.log(`Payment history ready ==>${JSON.stringify(data)}`);
    };
    paymentData();
    // console.log("A bet that this will load b4 the async await");
  }, []);
  return (
    <div className="App">
      <Table paymentHistory={paymentHistory} />
    </div>
  );
}

export default App;
