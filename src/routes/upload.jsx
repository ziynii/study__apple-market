import React, { useRef, useState } from 'react';
import { db, storage } from '../firebase';

const Upload = ({ setIsUpload }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const titleRef = useRef();
  const contentRef = useRef();
  const priceRef = useRef();
  const date = new Date(+new Date() + 3240 * 10000).toISOString().split('T')[0];
  const [textareaValue, setTextareaValue] =
    useState('상품 설명을 입력해주세요');

  console.log(user);

  const onSubmit = () => {
    const file = document.querySelector('#image').files[0];
    const storageRef = storage.ref();
    const saveImageRef = storageRef.child('image/' + file.name);
    const uploadImage = saveImageRef.put(file);

    uploadImage.on(
      'state_change',
      // 변화시 동작하는 함수
      null,
      // 에러시 동작하는 함수
      (error) => {
        console.log('실패사유', error);
      },
      // 성공시 동작하는 함수
      () => {
        uploadImage.snapshot.ref.getDownloadURL().then((url) => {
          db.collection('products')
            .add({
              title: titleRef.current.value,
              price: Number(priceRef.current.value),
              content: contentRef.current.value,
              date: date,
              image: url,
              uid: user.uid,
              username: user.displayName,
            })
            .then((result) => {
              console.log(result);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      }
    );
    // setIsUpload(false);
  };

  const handleTextarea = (event) => {
    setTextareaValue(event.target.value);
  };

  return (
    <div className="container upload">
      <input
        type="text"
        className="form-contol mt-2"
        id="title"
        placeholder="title"
        ref={titleRef}
      />
      <textarea
        className="form-coltrol mt-2"
        id="content"
        rows="10"
        ref={contentRef}
        value={textareaValue}
        onChange={handleTextarea}
      />
      <input
        type="text"
        className="form-control mt-2"
        id="price"
        placeholder="price"
        ref={priceRef}
      />
      <input type="file" className="form-control mt-2" id="image" />
      <button className="btn btn-danger mt-3" id="send" onClick={onSubmit}>
        올리기
      </button>
    </div>
  );
};
export default Upload;
