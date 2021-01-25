import GlobalStyle from './styles/globals';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
function App() {
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
