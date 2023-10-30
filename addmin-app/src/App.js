import logo from './logo.svg';
import './App.css';
import Admindisplay from './Admindisplay';
import Profile from './Profile';

import { BrowserRouter ,NavLink,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <Routes>

      <Route exact path={"/"} element={<Admindisplay />} />
      <Route exact path={"/Profile"} element={<Profile />} />
    </Routes>
  );
}

export default App;

