import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async (endpoint) => {
      fetch(endpoint, { method: "GET" })
        .then((response) => response.text())
        .then((result) => setData(result))
        .catch((error) => console.log("error", error));
    };
    fetchData("https://randomuser.me/api");
  }, []);

  return (
    <div className="App">
      <h1>Hello Young Wizard 🧙🧙‍♂️</h1>
      <h2>Start editing to see some magic happen!</h2>
      {data || JSON.stringify(data)}
    </div>
  );
}
