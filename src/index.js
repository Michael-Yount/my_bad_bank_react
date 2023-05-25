import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot} from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Deposit from './pages/Deposit';
import Data from './pages/Data';
import NotFound from './pages/NotFound';
import ConditionalData from './pages/ConditionalData';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}> 
           <Route index element={<Home/>} />
           <Route path="register"  element={<Register />} />
           <Route path="login"  element={<Login />} />
           <Route path="deposit"  element={<Deposit />} />
           <Route path="data" element={<Data />} />
           <Route path="conditional-data" element={<ConditionalData />} />
           <Route path="*" element={<NotFound />} />
        </Route>  
       </Routes>  
    </BrowserRouter>
  </React.StrictMode>,  
);



