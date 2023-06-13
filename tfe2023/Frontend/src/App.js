
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HorizontalNavbar from '../src/HorizontalNavbar/HorizontalNavbar';
import React from 'react';
import './App.css';

import Calendrier from './Calandrier/Calendrier';
import Communaute from './Communaute/Communaute';
import ParametreAdmin from './ParametreAdmin/ParametreAdmin';

function App() {
  return (
    <Router>
      < HorizontalNavbar />
      <Routes>
        <Route path='/' exact element={<Calendrier />} />
        <Route path='/communaute' exact element={<Communaute />} />
        <Route path='/parametreAdmin' exact element={<ParametreAdmin/>}/>
      </Routes>
    </Router>
  );
}
export default App;
