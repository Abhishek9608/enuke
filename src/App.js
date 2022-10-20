import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  const [listData , setListData] = useState();

  useEffect(() => {
    fetch(
      "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
    )
      .then((res) => res.json())
      .then((res) => setData(res && Object.values(res)[1]))
      .catch((err) => console.log(err))
  }, []);


  useEffect(() => {
  if(data){
  const listValue = Object.keys(data).map((key) => ({...data[key], datetime: key}))
  setListData(listValue)
  }
  },[data])

  return (
    <div className="App">
      <table>
        <tr>
          <th>DateTime </th>
          <th>Open</th>
          <th>High</th>
          <th>Low</th>
          <th>Close</th>
          <th>Volume</th>
        </tr>
        {listData &&
          listData.map((item) => {
            return (
              <tr>
                <td>{item["datetime"]}</td>
                <td>{item["2. high"]}</td>
                <td>{item["2. high"]}</td>
                <td>{item["3. low"]}</td>
                <td>{item["4. close"]}</td>
                <td>{item["5. volume"]}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}

export default App;
