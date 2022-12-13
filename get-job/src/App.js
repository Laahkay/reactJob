import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from './components/MainRoutes'
// import Navbar from "./components/Navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      {/* <h2> Hello Job Sickers</h2> */}
      <BrowserRouter>
     {/* <Navbar/>  */}
      <MainRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
