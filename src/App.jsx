
import { Routes, Route } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import 'modern-normalize/modern-normalize.css';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

export default function App() {

  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </>
  )
  
}
// export default App;
