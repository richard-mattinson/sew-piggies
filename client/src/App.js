import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";

import Nav from "./components/Nav/Nav"

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
