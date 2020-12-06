import './App.scss';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <Home />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
