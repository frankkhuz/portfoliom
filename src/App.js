import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Page from './pages/Page';
import Form from './pages/Form';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Page />} />
          <Route path='/form' element={<Form />} />
          <Route path='/h'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
  