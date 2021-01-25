import GlobalStyle from './styles/globals';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <Aboutme/>
      <Skills/>
      <Projects/>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
