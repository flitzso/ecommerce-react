import React from 'react';
import ProdutoCard from './ProdutoCard';
import './css/Produtos.css'

const Produtos = () => {
  const produtos = [
    {
      imgSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp',
      title: 'Quant trident shirts',
      rating: 4,
      reviews: 310,
      features: ['100% cotton', 'Light weight', 'Best finish'],
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
      price: 13.99,
      oldPrice: 20.99,
      freeShipping: true,
    },
    {
      imgSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp',
      title: 'Quant olap shirts',
      rating: 4,
      reviews: 289,
      features: ['100% cotton', 'Light weight', 'Best finish'],
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
      price: 14.99,
      oldPrice: 21.99,
      freeShipping: true,
    },
    {
      imgSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(5).webp',
      title: 'Quant ruybi shirts',
      rating: 4,
      reviews: 145,
      features: ['100% cotton', 'Light weight', 'Best finish'],
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
      price: 17.99,
      oldPrice: 25.99,
      freeShipping: true, 
      tags: ['Quant', 'ruybi', 'camisa', 'shirt', 'light weight'] // Tags para pesquisa
    },
  ];

  return (
    <div>
      <section id="produtos">
        <div className="container py-5">
          <div className="row justify-content-center">
            {produtos.map((produto, index) => (
              <ProdutoCard key={index} {...produto} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Produtos;
