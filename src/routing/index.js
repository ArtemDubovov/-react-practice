import HomePage from "../pages/HomePage/homePage";
import UseEffectPage from "../pages/useEffectPage/useEffectComponent";
import UseMemoPage from "../pages/useMemoPage/useMemoPage";
import UseRefPage from "../pages/useRefPage/useRefPage";
import UseStatePage from "../pages/useStatePage/useStatePage";


const PAGES = [
    {url: '/*', pageName: '#Home', component: <HomePage />},
    {url: '/useState', pageName: '#UseState', component: <UseStatePage />},
    {url: '/useEffect', pageName: '#UseEffect', component: <UseEffectPage />},
    {url: '/useMemo', pageName: '#UseMemo', component: <UseMemoPage />},
    {url: '/useRef', pageName: '#UseRef', component: <UseRefPage />},
]

export default PAGES;