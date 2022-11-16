import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Dashboard from './pages/Dashboard';
import User from "./components/User";
import AddUsers from "./components/AddNewUser";
import Layout from './components/shared/Layout';
// import Products from './components/Products';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
      <Routes>
        <Route index element={<App />} />
          <Route path='/' element={<Layout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path='/layout' element={<Layout />}/> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/addusers" element={<AddUsers />} />
          {/* <Route path='/products' element={<Products />} /> */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

