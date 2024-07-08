// components/client/Home.js
import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Produtos from '../components/Produtos';
import Search from '../components/SearchProduto';

const Home = () => {
  return (
    <div>
     <Navbar />
     <Search />
     <Produtos />
     <Footer />
    </div>
  );
};

export default Home;
