import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from "./components/Alert";
import About from './components/About';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null);
  },2000)
}

  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#0b0a36";
      showAlert("Dark Mode has been enabled","success");
    }else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
      <>
      <Router>

        <Navbar titleName="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path='/' element={<TextForm heading="Converter of Text" mode={mode} showAlert={showAlert}/>}/>
          <Route path='/about' element={<About mode={mode}/>}/>
        </Routes>
      </Router>
      </>
  );
}

export default App;
