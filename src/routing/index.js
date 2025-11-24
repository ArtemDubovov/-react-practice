import DefaultPage from "../pages/default";
import UseEffectPage from "../pages/useEffectPage";
import UseMemoPage from "../pages/useMemoPage";
import UseRefPage from "../pages/useRefPage";
import UseStatePage from "../pages/useStatePage";

const PAGES = [
    {url: '/*', pageName: '#Home', component: <DefaultPage />},
    {url: '/useState', pageName: '#UseState', component: <UseStatePage />},
    {url: '/useEffect', pageName: '#UseEffect', component: <UseEffectPage />},
    {url: '/useMemo', pageName: '#UseMemo', component: <UseMemoPage />},
    {url: '/useRef', pageName: '#UseRef', component: <UseRefPage />},
]

export default PAGES;