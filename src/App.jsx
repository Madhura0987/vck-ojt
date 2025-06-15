import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AdmissionPage from "./pages/AdmissionPage";

const App= ()  =>{
    return(
        <>
            
      <Router>
        <Routes>

          <Route path="/" element= {<HomePage/>} />
          <Route path="/home" element= {<HomePage/>}/>
          <Route path="/about" element= {<AboutPage/>}/>
          <Route Path="/admission" element= {<AdmissionPage/>}/>

        </Routes>
      </Router>
        </>
    )
}

export default App;