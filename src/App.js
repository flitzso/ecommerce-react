import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import NavBar from './components/NavBar';
import Produtos from './components/Produtos';
import Footer from './components/Footer';
import PainelAdministrativo from './pages/PainelAdministrativo';
import SearchProduto from './components/SearchProduto';
import MinhaConta from './pages/MinhaConta';
import ItemCart from './pages/ItemCart';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/admin" element={<PainelAdministrativo />} />
        <Route path="/search" element={<SearchProduto />} />
        <Route path="/minhaconta" element={<MinhaConta />} />
        <Route path="/carrinho" element={<ItemCart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;