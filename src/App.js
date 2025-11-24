import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PAGES from './routing';
import WrapperPage from './components/WrapperPage/WrapperPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {
          PAGES.map(page => <Route key={page.url} path={page.url} element={<WrapperPage pageComponent={page.component}/>}/>)
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
