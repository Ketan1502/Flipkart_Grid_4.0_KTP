import "./App.css";
import Snow from "./components/commons/Snow";
import Card from "./components/commons/Card";
import Burn from "./components/commons/Burn";
import Signup from "./components/commons/Signup";
import Signin from "./components/commons/Signin";
import Landing from "./components/commons/Landing";
import Warranty from "./components/commons/Warranty";
import Contracts from "./components/commons/Contracts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Snow />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/view" element={<Card />} />
          <Route path="/burn" element={<Burn />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/contracts" element={<Contracts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
