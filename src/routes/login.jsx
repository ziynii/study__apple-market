import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Login = () => {
  const emailRef = useRef();
  const pwRef = useRef();
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      pwRef.current.value
    );
    navigate('/');
  };

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div className="container login">
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="email"
          id="email"
          ref={emailRef}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="pw"
          id="password"
          ref={pwRef}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleLogin}>
        로그인
      </button>
      <button type="submit" className="btn btn-primary" onClick={handleLogout}>
        로그아웃
      </button>
    </div>
  );
};
export default Login;
