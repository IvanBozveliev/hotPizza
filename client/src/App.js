import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Main from './components/Main/Main.js';
import Contacts from './components/Contacts/Contacts.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import CreatePizza from './components/CreatePizza/CreatePizza.js';
import About from './components/About/About.js';
import Cart from './components/Cart/Cart';

import { Routes, Route } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
{/* 
      <div className='mainContent'> */}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create-pizza' element={<CreatePizza />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      {/* </div> */}


      <Footer />
    </div>
  );
}

export default App;
