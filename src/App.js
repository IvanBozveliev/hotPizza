import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Main from './components/Main/Main.js';
import Contacts from './components/Contacts/Contacts.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Main /> */}
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
