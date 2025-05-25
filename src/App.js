import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Alert from './components/Alert';

function App() {
   const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'LightSeaGreen'
  });

  const [textFormStyle, setTextFormStyle] = useState({
    color: 'black',
    backgroundColor: 'LightBlue'
  });

    const [navBarStyle, setNavBarStyle] = useState({
    color: 'black',
    backgroundColor: 'AquaMarine'
  });

  const [btnText, setBtnText] = useState("Dark Mode");
  const [alert, setAlert] = useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
  }
  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      });
      setTextFormStyle({
        color: 'white',
        backgroundColor: 'SlateGray'
      });
      setNavBarStyle({
        color: 'white',
        backgroundColor: 'Gray'
      });
      setBtnText("Light Mode");
      showAlert("Dark Mode is enabled", "SUCCESS")
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'LightSeaGreen'
      });
      setTextFormStyle({
        color: 'black',
        backgroundColor: 'LightBlue'
      });
      setNavBarStyle({
        color: 'black',
        backgroundColor: 'AquaMarine'
      });
      setBtnText("Dark Mode");
      showAlert("Light Mode is enabled", "SUCCESS")

    }
  };

  return (
    <div style={myStyle}>
    <Router>
    <Navbar toggleStyle={toggleStyle} btnText={btnText} myStyle={navBarStyle} />
    <Alert alert={alert}/>
    <Routes>
        <Route path="/" element={<TextForm heading="Try Akshar - Text Transformer" myStyle={textFormStyle} showAlert={showAlert}/>} />
        <Route path="/about" element={<AboutUs myStyle={myStyle}/>} />
      </Routes>
       <Footer myStyle={navBarStyle} />
    </Router>
      

    </div>
  );
}

export default App;
