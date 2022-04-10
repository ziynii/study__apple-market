import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../firebase';

const Detail = () => {
  const docId = useParams();
  const [product, setProduct] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    db.collection('products')
      .doc(docId.id)
      .get()
      .then((result) => {
        console.log(result.data());
        setProduct(result.data());
      });
  }, []);

  const onSubmit = () => {
    navigate(`/edit/${docId.id}`);
  };

  return (
    <div className="container detail">
      <h2 className="detail-title">{product?.title}</h2>
      <div
        className="detail-pic my-4"
        style={{ backgroundImage: `url(${product?.image})` }}
      ></div>
      <h5 className="author">{product?.username}</h5>
      <p className="date">{product?.date}</p>
      <p className="price">{product?.price}</p>
      <p className="content">{product?.content}</p>

      <button type="button" className="btn btn-secondary" onClick={onSubmit}>
        수정하기
      </button>
    </div>
  );
};
export default Detail;
