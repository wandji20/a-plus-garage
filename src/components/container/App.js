import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Nav from '../presentation/Nav';
import Navigations from './Navigations';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Nav />
      <section id="content" className="container remove-padding">
        <Navigations />
      </section>
      <Footer />
    </Router>
  );
}

export default App;
