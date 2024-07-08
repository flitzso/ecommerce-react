import React from 'react';

const ProdutoCard = ({ imgSrc, title, rating, reviews, features, description, price, oldPrice, freeShipping }) => {
  return (
    <div className="col-md-12 col-xl-10 mb-3">
      <div className="card shadow-0 border rounded-3">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
              <div className="bg-image hover-zoom ripple rounded ripple-surface">
                <img src={imgSrc} className="w-100" />
                <a href="#!">
                  <div className="hover-overlay">
                    <div className="mask" style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6">
              <h5>{title}</h5>
              <div className="d-flex flex-row">
                <div className="text-danger mb-1 me-2">
                  {[...Array(rating)].map((_, i) => (
                    <i key={i} className="fa fa-star"></i>
                  ))}
                </div>
                <span>{reviews}</span>
              </div>
              <div className="mt-1 mb-0 text-muted small">
                {features.map((feature, index) => (
                  <span key={index}>{feature}<span className="text-primary"> • </span></span>
                ))}
                <br />
              </div>
              <p className="text-truncate mb-4 mb-md-0">
                {description}
              </p>
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
              <div className="d-flex flex-row align-items-center mb-1">
                <h4 className="mb-1 me-1">${price}</h4>
                {oldPrice && <span className="text-danger"><s>${oldPrice}</s></span>}
              </div>
              {freeShipping && <h6 className="text-success">Free shipping</h6>}
              <div className="d-flex flex-column mt-4">
                <button className="btn btn-primary btn-sm" type="button">Details</button>
                <button className="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdutoCard;
