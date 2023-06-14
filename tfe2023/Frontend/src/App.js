
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import './App.css';

import HorizontalNavbar from '../src/HorizontalNavbar/HorizontalNavbar';
import Calendrier from './Calandrier/Calendrier';
import Communaute from './Communaute/Communaute';
import ParametreAdmin from './ParametreAdmin/ParametreAdmin';
import VerticalNavbar from './VerticalNavbar/VerticalNavbar';


function App() {
  return (
    <Router>
      < HorizontalNavbar />
      < VerticalNavbar />
      <Routes>
        <Route path='/' exact element={<Calendrier />} />
        <Route path='/communaute' exact element={<Communaute />} />
        <Route path='/parametreAdmin' exact element={<ParametreAdmin/>}/>
      </Routes>
    </Router>
  );
}
export default App;
