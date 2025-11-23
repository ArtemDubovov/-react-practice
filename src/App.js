import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultPage from './pages/default';
import UseStatePage from './pages/useStatePage/';
import UseEffectPage from './pages/useEffectPage';
import UseMemoPage from './pages/useMemoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<DefaultPage />} />
        <Route path="/useState" element={<UseStatePage />} />
        <Route path="/useEffect" element={<UseEffectPage />} />
        <Route path="/useMemo" element={<UseMemoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
