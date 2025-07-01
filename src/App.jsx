import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Clients from "./components/Clients";
import About from "./components/About";
import Blog from "./components/blog";
import Community from "./components/Community";
import AuthModals from "./components/AuthModals";




function App() {
  return (
   <>
     <Routes>
           <Route path="/" element={<Home />} />
           <Route path="clients" element={<Clients />} />
           <Route path="about" element={<About />} />
           <Route path="blog" element={<Blog />} />
           <Route path="community" element={ <Community/>} />
           <Route path="authmodals" element={ <AuthModals/>}/>
    </Routes>
   </>


   
  );
}

export default App;
