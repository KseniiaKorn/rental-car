import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import CarDetailsPage from './pages/CarDetailsPage/CarDetailsPage';
import Layout from './components/Layout/Layout';

function App() {

  return (
    <Layout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/catalog/:id" element={<CarDetailsPage />} />
      </Routes>
      </Layout>
  );
};

export default App;
