import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'modern-normalize/modern-normalize.css';
import Layout from './layouts/Layout';


import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import SneakersList from './components/SneakersList/SneakersList';


export default function App() {
  return (
    <Routes> 
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}