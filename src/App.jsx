import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/home.jsx';
import Header from './components/header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
