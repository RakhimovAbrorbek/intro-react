import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [multiply, setMultiply] = useState(1);
  const [auth, setAuth] = useState("login");
  const [abutton, setButton] = useState("login");
  const [counters, setCounters] = useState([]);
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [position, setPosition] = useState("")
  const [club, setClub] = useState("")



  function handleClick() {
    setCount(prev => prev + multiply);
  }

  function handleMultiply() {
    setMultiply(prev => prev + 1);
  }

  function handleAuth() {
    if (auth === "login") {
      setAuth("welcome");
      setButton("logout");
    } else {
      setAuth("login");
      setButton("login");
    }
  }

  function addCounter() {
    setCounters(prev => [...prev, 0]);
  }

  function increment(index) {
    const newArray = [...counters]
    newArray[index] = newArray[index] + 1
    setCounters(newArray)
  }

  function decrement(index) {
    const newArray = [...counters]
    newArray[index] = newArray[index] - 1
    setCounters(newArray)
  }

  function addTableRow() {
    const fTable = document.querySelector(".table")
    fTable.innerHTML +=
      ` 
     <tr>
      <td>${name}</td>
      <td>${number}</td>
      <td>${position}</td>
      <td>${club}</td>
    </tr>
    `
    document.querySelector("form").reset()
    setName("")
    setNumber("")
    setPosition("")
    setClub("")
  }


  return (
    <div className="container mt-4">
      {/* 1ST EXERCISE */}
      <h1>Qadamlar Soni: {count}</h1>
      <button onClick={handleClick} className="btn btn-primary me-2">Yuring</button>

      <h1>Qadam Kattaligi: {multiply}</h1>
      <button onClick={handleMultiply} className="btn btn-secondary">Oshiring</button>

      {/* 2ND EXERCISE */}
      <h2>{auth}</h2>
      <button onClick={handleAuth} className="btn btn-warning">{abutton}</button>

      {/* 3RD EXERCISE */}
      <h1>Counters!</h1>
      <button onClick={addCounter} className="btn btn-success mb-3">Add Counter</button>


      {counters.map((value, index) => (
        <div key={index}>
          <button onClick={() => increment(index)}>+</button>
          {value}
          <button onClick={() => decrement(index)}>-</button>
        </div>
      ))}


      {/*4TH EXERCISE */}
      <form action="#" onSubmit={addTableRow}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" required />
        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="number" required />
        <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} placeholder="position" required />
        <input type="text" value={club} onChange={(e) => setClub(e.target.value)} placeholder="club" required />
        <button type="submit">Add</button>
      </form>



      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Position</th>
            <th>Club</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
        <tbody>

        </tbody>
      </table>
    </div>
  );
}


export default App;




