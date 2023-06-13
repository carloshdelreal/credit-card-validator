import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nabvar from './components/navbar/Nabvar';
import Form from './components/forms/Form';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <Nabvar/>
      <div className="container-fluid p-4">
        <div className='row justify-content-center'>
          <div className='col-8'>
            <Routes>
              <Route path="/" element={<Form/>}></Route>
            </Routes>
            <ToastContainer/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
