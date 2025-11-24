import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PAGES from './routing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {
          PAGES.map(page => <Route key={page.url} path={page.url} element={page.component} />)
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
