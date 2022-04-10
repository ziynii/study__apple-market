import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, doc }) => {
  return (
    <div className="product">
      <div
        className="thumbnail"
        style={{
          backgroundImage: `url(${product.image})`,
        }}
      ></div>
      <div className="flex-grow-1 p-4">
        <Link to={`/detail/${doc.id}`}>
          <h5 className="title">{product.title}</h5>{' '}
        </Link>
        <p className="date">{product.date}</p>
        <p className="price">{product.price}원</p>
        <p className="float-end">💗0</p>
      </div>
    </div>
  );
};

export default ProductCard;
