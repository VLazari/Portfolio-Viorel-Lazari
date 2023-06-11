import { BrowserRouter } from 'react-router-dom';
import { Navbar, Hero, About, Projects, Contact } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className="relative flex flex-col items-center scroll-smooth">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
