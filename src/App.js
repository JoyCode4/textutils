// import About from './About';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import React, {useState} from 'react';

function App() {
  const [mode,setMode] = useState("light");
  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#0b0a36";
    }else{
      setMode("light");
      document.body.style.backgroundColor="white";
    }
  }
  return (
      <>
        <Navbar titleName="TextUtils" mode={mode} toggleMode={toggleMode} />
        <TextForm heading="Converter of Text" mode={mode}/>
        {/* <About/> */}
      </>
  );
}

export default App;
