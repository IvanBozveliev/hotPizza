import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Main from './components/Main/Main.js';
import Contacts from './components/Contacts/Contacts.js';
import Login from './components/Login/Login.js';

import { Routes, Route } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/login' element={<Login />} />
      </Routes>
   
      <Footer />
    </div>
  );
}

export default App;
