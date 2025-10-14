import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header"; //import component Header
import Mahasiswa from "./components/Mahasiswa";
import Visi from "./components/Visi";
import Misi from "./components/Misi";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function handleVote() {
    setCount(count + 1);
  }

  function handleVote2() {
    setCount2(count2 + 1);
  }

  function resetVote() {
    setCount(0);
    setCount2(0);
  }
  return (
    <>
      {/* panggil component */}
      <Header></Header>
      <button onClick={resetVote}>RESET VOTE</button>
      <hr />
      <Mahasiswa nama="Jesslyn" skill="Mobile Programming"></Mahasiswa>
      <Visi visi="1"></Visi>
      <Misi misi="2"></Misi>
      <br />
      <button onClick={handleVote}>Vote {count}</button>
      <br />
      <hr />
      <Mahasiswa nama="Kimiko"></Mahasiswa>
      <Visi visi="1"></Visi>
      <Misi misi="2"></Misi>
      <br />
      <button onClick={handleVote2}>Vote {count2}</button>
    </>
  );
}

export default App;
