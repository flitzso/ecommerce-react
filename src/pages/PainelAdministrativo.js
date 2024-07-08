// components/admin/PainelAdministrativo.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PainelAdministrativo = () => {
  const handleAddProduto = () => {
    // Lógica para adicionar um produto
    console.log('Adicionar produto');
  };

  const handleDeleteProduto = () => {
    // Lógica para deletar um produto
    console.log('Deletar produto');
  };

  const handleUpdateProduto = () => {
    // Lógica para atualizar um produto
    console.log('Atualizar produto');
  };

  const handleAddUsuario = () => {
    // Lógica para adicionar um usuário
    console.log('Adicionar usuário');
  };

  const handleDeleteUsuario = () => {
    // Lógica para deletar um usuário
    console.log('Deletar usuário');
  };

  const handleUpdateUsuario = () => {
    // Lógica para atualizar um usuário
    console.log('Atualizar usuário');
  };

  return (
    <div className="container mt-4">
      <h2>Área Administrativa</h2>
      
      {/* Painel de Produtos */}
      <div className="card mt-4">
        <div className="card-header">
          <h4>Produtos</h4>
        </div>
        <div className="card-body">
          <button className="btn btn-primary me-2" onClick={handleAddProduto}>Adicionar Produto</button>
          <button className="btn btn-danger me-2" onClick={handleDeleteProduto}>Deletar Produto</button>
          <button className="btn btn-warning" onClick={handleUpdateProduto}>Alterar Produto</button>
        </div>
      </div>

      {/* Painel de Usuários */}
      <div className="card mt-4">
        <div className="card-header">
          <h4>Usuários</h4>
        </div>
        <div className="card-body">
          <button className="btn btn-primary me-2" onClick={handleAddUsuario}>Adicionar Usuário</button>
          <button className="btn btn-danger me-2" onClick={handleDeleteUsuario}>Deletar Usuário</button>
          <button className="btn btn-warning" onClick={handleUpdateUsuario}>Alterar Usuário</button>
        </div>
      </div>
    </div>
  );
};

export default PainelAdministrativo;
