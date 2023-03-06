import Header from './components/header';
import AboutMe from './components/aboutMe';
import Footer from './components/footer';
import Navigation from './components/navigation';
import ProjectSection from './components/projectSection';
import './CSS/App.css';
import './CSS/style.css';

function App() {
  return (
    <main>
      <Header />
      <Navigation />
      <aside>
        <AboutMe />  
        <ProjectSection />  
        <Footer/>
      </aside>
    </main>
  );
}

export default App;
