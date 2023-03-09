import DashboardPage from './Pages/DashboardPage';
import LoginPage from './Pages/LoginPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path ='/' element={<LoginPage/>} />
        <Route path ='/dashboard' element={<DashboardPage/>} />
      </Routes>
    </Router>
  );  
}

export default App;
