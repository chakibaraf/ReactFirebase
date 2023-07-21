import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import SignUpModal from "./component/SignUpModal";

function App() {
  return (
    <>
    <SignUpModal/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
     
    </>
  
  );
}

export default App;
