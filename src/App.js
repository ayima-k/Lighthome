import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <React.Fragment>
      <Header/>
      {/* <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes> */}
      <Footer/>
    </React.Fragment>
  );
}

export default App;
