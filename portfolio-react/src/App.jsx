


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/aboutme";
import HomeContent from "./components/homecontent"; 
import Header from "./components/header";
import "./App.css";
import "./styles/landingpage.css"; 
import Layout from "./components/layout"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<HomeContent />} /> 
          <Route path="aboutme" element={<AboutMe />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
