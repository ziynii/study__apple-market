import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';

const Detail = () => {
  const docId = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    db.collection('products')
      .doc(docId.id)
      .get()
      .then((result) => {
        console.log(result.data());
        setProduct(result.data());
      });
  }, []);

  console.log(product);
  console.log(docId.id);
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
    </div>
  );
};
export default Detail;
