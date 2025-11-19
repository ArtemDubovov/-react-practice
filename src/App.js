import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultPage from './pages/default';
import UseStatePage from './pages/useStatePage/';
import UseEffectPage from './pages/useEffectPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<DefaultPage />} />
        <Route path="/useState" element={<UseStatePage />} />
        <Route path="/useEffect" element={<UseEffectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
