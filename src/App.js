import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";


function App() {
  const [alert, setAlert]=useState(null);
  const showAlert =(msg, type)=>{
    setAlert({
      msg:msg,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const [mode, setMode] = useState("light");
  const handleToggle =()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="gray";
      showAlert("Dark theme is enable", "success")
      
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white";
      
    }
  }
  
  return (
    <>
<Navbar mode={mode} handleToggle={handleToggle}  key={new Date()} />
<Alert alert={alert}/>
<TextForm heading="Enter text here..."/>
 </>
  );
}

export default App;
