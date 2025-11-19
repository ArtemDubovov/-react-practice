import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UseEffectPage from './pages/useEffectPage/UseEffectPage';
import UseStatePage from './pages/useStatePage/UseStatePage';
import Default from './pages/default/default';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Default />} />
        <Route path="/useState" element={<UseStatePage />} />
        <Route path="/useEffect" element={<UseEffectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
