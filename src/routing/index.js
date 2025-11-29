import HomePage from "../pages/HomePage/homePage";
import LazyPage from "../pages/lazyPage/LazyPage";
import MemoPage from "../pages/memo/Memo";
import PortalPage from "../pages/portalPage/portalPage";
import UseCallbackPage from "../pages/useCallbackPage/useCallbackPage";
import UseContextPage from "../pages/useContextPage/useContextPage";
import UseEffectPage from "../pages/useEffectPage/useEffectComponent";
import UseMemoPage from "../pages/useMemoPage/useMemoPage";
import UseReducerPage from "../pages/useReducerPage/UseReducerPage";
import UseRefPage from "../pages/useRefPage/useRefPage";
import UseStatePage from "../pages/useStatePage/useStatePage";
import UseTransitionPage from "../pages/useTransitionPage/UseTransitonPage";
import UuidPage from "../pages/uuid/uuidPage";
import AbortControllerPage from "../pages/AbortControllerPage/AbortControllerPage";
import ComponentLifeCyclesPage from "../pages/componentLifeCycles/ComponentLifeCyclesPage";


const PAGES = [
    {url: '/*', pageName: '#Home', component: <HomePage />},
    {url: '/useState', pageName: '#UseState', component: <UseStatePage />},
    {url: '/useEffect', pageName: '#UseEffect', component: <UseEffectPage />},
    {url: '/useMemo', pageName: '#UseMemo', component: <UseMemoPage />},
    {url: '/useRef', pageName: '#UseRef', component: <UseRefPage />},
    {url: '/useCallback', pageName: '#UseCallback', component: <UseCallbackPage />},
    {url: '/useContext', pageName: '#UseContext', component: <UseContextPage />},
    {url: '/useReducer', pageName: '#UseReducer', component: <UseReducerPage />},
    {url: '/useTransition', pageName: '#useTransition', component: <UseTransitionPage />},
    {url: '/memo', pageName: '#memo', component: <MemoPage />},
    {url: '/portal', pageName: '#portal', component: <PortalPage />},
    {url: '/lazy', pageName: '#lazy', component: <LazyPage />},
    {url: '/uuid', pageName: '#uuid', component: <UuidPage />},
    {url: '/abortController', pageName: '#abortController', component: <AbortControllerPage />},
    {url: '/componentLifeCycles', pageName: '#componentLifeCycles', component: <ComponentLifeCyclesPage />},
]

export default PAGES;
