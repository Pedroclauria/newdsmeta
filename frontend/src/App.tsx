import Header from "./components/Header";
import SalesCard from "./components/SalesCard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./components/Login";
import Insert from "./components/Insert";
import { Route, Routes, Link } from "react-router-dom";
import {Home} from "./pages/Home"
import {Private} from "./pages/Private"
import { AuthProvider } from "./contexts/Auth/AuthProvider";
import { RequireAuth } from "./contexts/Auth/RequireAuth";


function App() {
  return (
    <>
  
      
    <ToastContainer />
      <Header />
      <nav>
         
         <Link to="/" >Home</Link>
         <Link to="/private" >Private</Link>
       </nav>
      <hr />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/private" element={<SalesCard />} />
      </Routes>
    
    </>
  )
}

export default App;
