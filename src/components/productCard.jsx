import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product">
      <div
        className="thumbnail"
        style={{
          backgroundImage: `url("https://via.placeholder.com/350")`,
        }}
      ></div>
      <div className="flex-grow-1 p-4">
        <h5 className="title">{product.제목}</h5>
        <p className="date">2030년 1월 8일</p>
        <p className="price">{product.가격}원</p>
        <p className="float-end">💗0</p>
      </div>
    </div>
  );
};

export default ProductCard;
