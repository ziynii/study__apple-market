import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/home.jsx';
import Header from './components/header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import './styles/main.css';
import Upload from './routes/upload.jsx';
import Login from './routes/login.jsx';
import Register from './routes/register.jsx';
import Detail from './routes/detail.jsx';
import { auth } from './firebase.js';
import { useEffect, useState } from 'react';

function App() {
  const [username, setUsername] = useState();

  auth.onAuthStateChanged((user) => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      console.log(user);
    }
    if (!user) {
      localStorage.removeItem('user');
    }
  });

  useEffect(() => {
    setUsername(JSON.parse(localStorage.getItem('user')).displayName);
  }, []);

  return (
    <div className="margin-wrapper">
      <BrowserRouter>
        <Header username={username} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
