import GlobalStyle from './styles/globals';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { useEffect } from 'react';
const OneSignal = window.OneSignal;
function App() {
  useEffect(()=>{
    const loadOne = async () => {
      window.OneSignal = window.OneSignal || [];
    OneSignal.push(function() {
    OneSignal.init({
      appId: "f847abb8-3282-4a84-8e14-533f3649da30",
      safari_web_id: "web.onesignal.auto.2cd5950f-b486-4c84-8005-0f30059d0b0c",
      notifyButton: {
        enable: true,
      },
    });
  });
    }
    loadOne()
  },[])
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Aboutme/>
      <Skills/>
      <Projects/>
      <Footer/>
    </>
  );
}

export default App;
