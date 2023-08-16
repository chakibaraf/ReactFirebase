import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import SignUpModal from "./component/SignUpModal";
import Private from "./pages/Private";
import PrivateHome from "./pages/PrivateHome/PrivateHome";

function App() {
  return (
    <>
    <SignUpModal/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/private" element={<Private/>}>
        <Route path="/private/private-home" element={<PrivateHome/>}/>
        
        </Route>
     
  

       
    </Routes>
     
    </>
  
  );
}

export default App;
