import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product">
      <div
        className="thumbnail"
        style={{
          backgroundImage: `url(${product.image})`,
        }}
      ></div>
      <div className="flex-grow-1 p-4">
        <h5 className="title">{product.title}</h5>
        <p className="date">{product.date}</p>
        <p className="price">{product.price}원</p>
        <p className="float-end">💗0</p>
      </div>
    </div>
  );
};

export default ProductCard;
