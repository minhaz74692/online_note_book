import './App.css';
import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './componants/Navbar';
import Home from './componants/Home';
import About from './componants/About';
import NoteState from './context/notes/NoteState';
import Login from './componants/Login';
import Signup from './componants/Signup';
import Alert from './componants/Alert';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  return (
    <NoteState>
      <Router>
      <Navbar showAlert ={showAlert}/>
      <Alert alert={alert}/>
      <Routes>
        <Route exact path="/" element= {<Home showAlert={showAlert}/>}/>
        <Route exact path="/about" element= {<About/>}/>
        <Route exact path="/login" element= {<Login showAlert={showAlert}/>}/>
        <Route exact path="/signup" element= {<Signup showAlert={showAlert}/>}/>
      </Routes>
    </Router>
    </NoteState>
  );
}

export default App;
