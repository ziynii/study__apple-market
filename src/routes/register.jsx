import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Register = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const pwRef = useRef();
  const navigate = useNavigate();

  const handleRegister = () => {
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        pwRef.current.value
      ) //
      .then((result) => {
        result.user.updateProfile({ displayName: nameRef.current.value });
        navigate('/login');
      });
  };

  return (
    <div className="container login">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="name"
          id="new-name"
          ref={nameRef}
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="email"
          id="email-new"
          ref={emailRef}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="pw"
          id="password-new"
          ref={pwRef}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleRegister}
      >
        가입하기
      </button>
    </div>
  );
};
export default Register;
