import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Contacts from './pages/Contacts';
import Main from './pages/Main';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
