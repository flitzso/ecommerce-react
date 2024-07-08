import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchProduto = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    handleSearch(value); // Chama a função de busca passada como prop
  };

  return (
    <div className="container mt-4">
      <h2>Pesquisar Produtos</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Digite o nome do produto..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
      </div>
    </div>
  );
};

export default SearchProduto;
