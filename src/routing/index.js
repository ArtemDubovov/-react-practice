import HomePage from "../pages/HomePage/homePage";
import UseCallbackPage from "../pages/useCallbackPage/useCallbackPage";
import UseContextPage from "../pages/useContextPage/useContextPage";
import UseEffectPage from "../pages/useEffectPage/useEffectComponent";
import UseMemoPage from "../pages/useMemoPage/useMemoPage";
import UseReducerPage from "../pages/useReducerPage/UseReducerPage";
import UseRefPage from "../pages/useRefPage/useRefPage";
import UseStatePage from "../pages/useStatePage/useStatePage";


const PAGES = [
    {url: '/*', pageName: '#Home', component: <HomePage />},
    {url: '/useState', pageName: '#UseState', component: <UseStatePage />},
    {url: '/useEffect', pageName: '#UseEffect', component: <UseEffectPage />},
    {url: '/useMemo', pageName: '#UseMemo', component: <UseMemoPage />},
    {url: '/useRef', pageName: '#UseRef', component: <UseRefPage />},
    {url: '/useCallback', pageName: '#UseCallback', component: <UseCallbackPage />},
    {url: '/useContext', pageName: '#UseContext', component: <UseContextPage />},
    {url: '/useReducer', pageName: '#UseReducer', component: <UseReducerPage />},
]

export default PAGES;