import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Layout from '../components/layout';
import ProductCard from '../components/productCard';
import { db } from '../firebase';
import Upload from './upload';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isUpload, setIsUpload] = useState(false);
  const [isDoc, setIsDoc] = useState({});

  useEffect(() => {
    db.collection('products')
      .get() //
      .then((result) => {
        let productsArray = [];
        let docsArray = [];

        result.forEach((doc) => {
          productsArray.push(doc.data());
          docsArray.push(doc);
        });

        setProducts(productsArray);
        setIsDoc(docsArray);
      });
  }, []);

  return (
    <div className="product-list">
      <Container>
        {products?.map((product, i) => {
          return <ProductCard product={product} key={i} doc={isDoc[i]} />;
        })}
      </Container>
      <button className="upload-button" onClick={() => setIsUpload(true)}>
        +
      </button>
      {isUpload ? <Upload setIsUpload={setIsUpload} /> : null}
      {isUpload ? <Layout setIsUpload={setIsUpload} /> : null}
    </div>
  );
};

export default Home;
