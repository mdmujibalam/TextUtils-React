//  import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from "react";
import Alert from './components/Alert';



function App() {
 const [mode, setMode] = useState('light');
 const [alert,setAlert] = useState(null);

const showAlert= (message,type)=>{
   setAlert({
    msg:message,
    type: type
   })
 setTimeout(() => {
  setAlert(null);
  
 }, 1500);
}

 const toggleMode= ()=>{
  if(mode==='light')
  {
    setMode('dark');
    document.body.style.backgroundColor='#060f1c';
    showAlert("Dark Mode Enabled","Success");
  }

  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light Mode Enabled","Success");
  }
 }
 
  return (

    <>

    <Navbar title='TextUtils'  mode={mode}   toggleMode={toggleMode}/>
      <Alert  alert={alert} />


      <Textform heading="Enter the text to analyze"  mode={mode}  showAlert={showAlert}/>
      
    
    </>

  );
}

export default App;
