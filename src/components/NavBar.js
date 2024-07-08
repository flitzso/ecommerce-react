import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light rounded" aria-label="Twelfth navbar example">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">

        <a href="/admin" className="btn btn-danger btn-lg">Admin</a>

          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/minhaconta">Minha conta</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/carrinho">Meu Carrinho</a>
            </li>
            <li class="nav-item">
              <a class="btn btn-link" href="/login">Login</a>
              <a class="btn btn-link" href="/register">Cadastro</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default NavBar;