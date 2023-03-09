
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';


import NavbarProprietaire from './NavbarProprietaire';




import React from 'react';
import './App.css';

import Calandrier from './Calandrier';
import Factures from './Factures';
import Communaute from './Communaute.js';
import GestionStocks from './GestionStocks.js';
import Cheval from './Cheval.js';
import Profil from './Profil.js';
import Parametre from './Parametre.js';
import ReseauSocial from './ResauSocial.js';




function App() {
  return (


      <Router>
        <NavbarProprietaire />
        <Routes>
          <Route path='/' exact element={<Calandrier />} />
          <Route path='/factures' exact element={<Factures />} />
          <Route path='/communaute' exact element={<Communaute />} />
          <Route path='/reseausocial' exact element={<ReseauSocial />} />
          <Route path='/parametre' exact element={<Parametre />} />
          <Route path='/profil' exact element={<Profil />} />
          <Route path='/cheval' exact element={<Cheval />} />
          <Route path='/stockage' exact element={<GestionStocks />} />
        </Routes>
      </Router>
 
  );
}

export default App;
