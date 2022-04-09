import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/home.jsx';
import Header from './components/header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import './styles/main.css';
import Upload from './routes/upload.jsx';

function App() {
  return (
    <div className="margin-wrapper">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
