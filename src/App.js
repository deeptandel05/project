// import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import About from './comonents/About';
import Alert from './comonents/Alert';
import Navbar from './comonents/Navbar';
import New from './comonents/New';
import Text from "./comonents/Text";
import {
  BrowserRouter as Router,
  Switch,
  Route  // useRouteMatch,
  // useParams
} from "react-router-dom";

// import './page.css'

// function MyButton() {
//   const n1=10;
// let text = "Hello"
// if(n1<10){
//   text = "good byy"
// }
// else{
//   text="hello"
// }
// let con = <h2>{text}</h2>
//   return (
//     <>
//    <p >{con}</p>
//     <button >
//      this is button
//     </button>
//      </>
//   ); 
// }

export default function MyApp() {
  const [mode, setmode] = useState("light");
  const [alert, Setalert] = useState(null);
  const [cmode, Setcmode] = useState("light");

  function showalert(msg, type) {
    Setalert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      Setalert(null);
    }, 2000);
  }
  function setmodes() {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#343a40"
      document.body.style.color = "white"
      showalert("dark mode is Enable", "success")
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showalert("light mode is Enable", "primary")
    }
  }
  function gmode() {
    if (cmode === "light") {
      Setcmode("gray");
      document.body.style.backgroundColor = "gray"
      document.body.style.color = "black"
    } else {
      Setcmode("light");
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"

    }
  }
  return (

    <>
      <Router>

        <Navbar title="Deep" mode={mode} smode={cmode} togglemode={setmodes} toggle={gmode} />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/">
              <Text heading="Enter the text below" showalert={showalert} />
            </Route>
            <Route exact path="/Form">
              <New />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}


// export default App;
