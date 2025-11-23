import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PAGES from './routing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {
          PAGES.map(page => {
            return <Route path={page.url} element={page.component} />
          })
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
