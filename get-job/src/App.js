import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import JobMarketing from "./components/JobMarketing";
import JobAdvertse from "./components/Advertise";

function App() {
  return (
    <div className="App">
      {/* <h2> Hello Job Sickers</h2> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Login" />} />
          <Route path="Login" Navigate to="/" element={<Login />} />

          <Route
            path="/Job_advertising"
            Navigate
            to="/"
            element={<JobAdvertse />}
          />

          <Route
            path="/Job_markerting"
            Navigate
            to="/"
            element={<JobMarketing />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
