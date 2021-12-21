import './App.css';
import Main from './components/Main'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;
