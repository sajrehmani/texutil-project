import './components/Navbar'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode,setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>
  {
    setAlert({message:message,type:type});
    setTimeout(()=>{setAlert(null)},1500);  
  }

  const toggleMode =()=>
  {
   if(mode === "light")
   {
    setMode("dark")
    document.body.style.backgroundColor="#65432f";
    showAlert("The dark mode is enable","success");
   }
   else
   {
    setMode("light")
    document.body.style.backgroundColor="white";
    showAlert("The light mode is enable","success");
   } 
  }
  return (
    <>
    <Navbar title="Text utils" mode={mode} modeToggle={toggleMode}/>
<Alert alertDetail={alert}/>
<TextForm showAlert={showAlert} heading="Enter your text here to analyze below" mode={mode}/>
    </>
   
  );
}

export default App;
