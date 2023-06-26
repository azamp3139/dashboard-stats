import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import RouteContent from './components/RouteContent';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
          <Navigation />
          <RouteContent />
      </div>
    </BrowserRouter>
  );
}

export default App;
