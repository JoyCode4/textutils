// import About from './About';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from "./components/Alert";
import React, {useState} from 'react';

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
        <Navbar titleName="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <TextForm heading="Converter of Text" mode={mode} showAlert={showAlert}/>
        {/* <About/> */}
      </>
  );
}

export default App;
