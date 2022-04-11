import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../firebase';

const Detail = () => {
  const docId = useParams();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [product, setProduct] = useState();
  const navigate = useNavigate();
  const date = new Date(+new Date() + 3240 * 10000).toISOString().split('T')[0];

  useEffect(() => {
    db.collection('products')
      .doc(docId.id)
      .get()
      .then((result) => {
        setProduct(result.data());
      });
  }, []);

  const onSubmit = () => {
    navigate(`/edit/${docId.id}`);
  };

  const enterChatroom = () => {
    db.collection('chatroom')
      .where('member', 'array-contains-any', [user.uid, docId.id])
      .get()
      .then((result) => {
        if (result.empty == true) {
          db.collection('chatroom').add({
            member: [user.uid, docId.id],
            product: product.title,
            date: date,
          });
        }
      });

    navigate(`/chat/${user.uid}`);
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
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={enterChatroom}
      >
        채팅하기
      </button>
    </div>
  );
};
export default Detail;
