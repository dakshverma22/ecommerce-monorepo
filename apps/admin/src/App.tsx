import "./App.css";
import NavBar from "./components/Navbar";
import { Signup } from "./components/Signup";
import {Landing} from "./components/Landing"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Product } from "./components/Product";

function App() {
  return (
    <div style={{margin:10}} >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<Product/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
