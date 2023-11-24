import logo from "./logo.svg";
import "./App.css";
import D3Chart from "./Component/DThree/D3";
import Navbar from "./Component/Navbar/Navbar";
import YourComponent from "./Component/DThree/newcomponet";
import LineGraph from "./Component/DThree/newcomponet";
import LineChart from "./Component/DThree/newcomponet";
import TwoColor from "./Component/DThree/TwoColour";
import TableGraph from "./Component/DThree/TableGraph";

function App() {
  const data = [10, 20, 15, 25, 30, 35, 20, 15];
  const tableData = [
    { account: 'Sales', thisMonth: 0.35, ytd: 1.14 },
    { account: 'Advertising', thisMonth: 1.27, ytd: 2.37 },
    { account: 'Inventory', thisMonth: 0.5, ytd: 1.35 },
    { account: 'Entertainment', thisMonth: 2.6, ytd: 2.08 },
    { account: 'Product', thisMonth: 0.02, ytd: 0.05 },
    // Add more rows if needed
  ];

  return (
    <div className="App">
      <Navbar />
      <div style={{display:'flex'}}>
        <div style={{background:'white',width:'20%',height:'100vh'}}>
            <h3>Dashboard</h3>
            <h3>Accounts</h3>
            <h3>Payroll</h3>
            <h3>reports</h3>
            <h3>Advertiser</h3>
            <h3>Contacts</h3>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            width: "70%",
            margin: "auto",
            gap: "20px",
          }}
        >
          <LineChart data={data} />
          <D3Chart />

          <TwoColor />
          <TableGraph data={tableData} />
        </div>
      </div>
    </div>
  );
}

export default App;
