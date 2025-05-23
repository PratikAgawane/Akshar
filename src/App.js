import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
    }
  };

  return (
    <div style={myStyle}>
    <Router>
    <Navbar toggleStyle={toggleStyle} btnText={btnText} myStyle={navBarStyle} />
    <Routes>
        <Route path="/" element={<TextForm heading="Try Akshar - Text Transformer" myStyle={textFormStyle} />} />
        <Route path="/about" element={<AboutUs myStyle={myStyle}/>} />
      </Routes>
       <Footer myStyle={navBarStyle} />
    </Router>
      

    </div>
  );
}

export default App;
