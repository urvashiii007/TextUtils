import './App.css'
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react'


export default function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
const toggleMode = () => {
  if(mode == 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
    }
}



return (
  <>
  {/*<Navbar title = "TextUtlis" aboutText ="About TextUtils" toggleMode={toggleMode}/>*/}
  {<Navbar title = "TextUtlis" mode={mode} toggleMode={toggleMode}/>}
  <Alert alert={alert} />
  <div className="container my-3">
    <TextForm heading="Enter the text to analyse below" mode={mode} showAlert={showAlert}/>
    <About/>
  </div>
  </>
);
}

