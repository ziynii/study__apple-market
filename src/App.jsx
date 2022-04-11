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
import Edit from './routes/edit.jsx';
import Chat from './routes/chat.jsx';

function App() {
  const [username, setUsername] = useState();

  auth.onAuthStateChanged((user) => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
    if (!user) {
      localStorage.removeItem('user');
    }
  });

  useEffect(() => {
    setUsername(JSON.parse(localStorage.getItem('user')).displayName);
  }, [username]);

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
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/chat/:id" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
