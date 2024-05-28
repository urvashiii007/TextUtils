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

  {/*const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }*/}
  
const toggleMode = (cls) => {
  //removeBodyClasses(cls)
  //console.log(cls)
  //document.body.classList.add('bg-'+cls)
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
    <TextForm heading="Try TextUtils - Word Counter , Character Counter" mode={mode} showAlert={showAlert}/>
    <About mode={mode}/>
  </div>
  </>
);
}

