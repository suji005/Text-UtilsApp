import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { About } from './Components/About';
import { Alert } from './Components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const[mode,setmode]=useState('light');
  const[alert,setAlert]=useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
    msg:message,
    type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const toggleMode=()=>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='grey';
      showAlert('dark mode is enable',"success");
    }
   else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode is enable',"success");
   }
    
  }
  return (
   <>
   <Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <Routes>
    <Route  exact path="/about" element={<About mode={mode}/>} />
    <Route  exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra space " mode={mode}/>} />
  </Routes>
  <div className='container'>
  </div>
  </Router>
</>
  );
 
}


export default App;
