import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/home.jsx';
import Header from './components/header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import './styles/main.css';
import Upload from './routes/upload.jsx';
import Login from './routes/login.jsx';
import Register from './routes/register.jsx';

function App() {
  return (
    <div className="margin-wrapper">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
