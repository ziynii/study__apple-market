import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db, storage } from '../firebase';

const Edit = () => {
  const docId = useParams();
	const navigate = useNavigate();
  const [product, setProduct] = useState();

  const [textareaValue, setTextareaValue] = useState('');
  const [titleValue, setTitleValue] = useState('');
  const [priceValue, setPriceValue] = useState('');

  useEffect(() => {
    db.collection('products')
      .doc(docId.id)
      .get()
      .then((result) => {
        setProduct(result.data());
      });
  }, []);

	console.log(product);

  useEffect(() => {
    if (product) {
      setTextareaValue(product.content);
      setTitleValue(product.title);
      setPriceValue(product.price);
    }
  }, [product]);

  const onChangeTitle = (e) => {
    setTitleValue(e.target.value);
  };

  const onChangeContent = (e) => {
    setTextareaValue(e.target.value);
  };

  const onChangePrice = (e) => {
    setPriceValue(e.target.value);
  };

  const onSubmit = () => {
    db.collection('products').doc(docId.id).update({
      title: titleValue,
      price: priceValue,
      content: textareaValue,
    });
		navigate('/')
  };

  return (
    <div className="container edit">
      <input
        type="text"
        className="form-contol mt-2"
        id="title"
        value={titleValue}
        onChange={onChangeTitle}
      />
      <textarea
        className="form-coltrol mt-2"
        id="content"
        rows="10"
        value={textareaValue}
        onChange={onChangeContent}
      />
      <input
        type="text"
        className="form-control mt-2"
        id="price"
        value={priceValue}
        onChange={onChangePrice}
      />
      <input type="file" className="form-control mt-2" id="image" />
      <button className="btn btn-danger mt-3" id="send" onClick={onSubmit}>
        수정하기
      </button>
    </div>
  );
};
export default Edit;
