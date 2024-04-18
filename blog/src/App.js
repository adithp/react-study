
import './App.css';
import Blogs from './components/screens/Blogs';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import View from './components/screens/View';
function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Blogs />} />
      <Route path='/view/:id' element={<View />} />
      </Routes>
    </Router>
   
  );
}

export default App;
