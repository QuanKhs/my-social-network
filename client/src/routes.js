import NotFound from 'components/NotFound';
import { lazy } from 'react';

const Home = lazy(() => import('pages/Home/Home'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));

export const routes = [
    {
        exact: true,
        path: '/',
        component: Home,
    },
    {
        exact: false,
        path: '/login',
        component: Login,
    },
    {
        exact: false,
        path: '/register',
        component: Register,
    },

    {
        component: NotFound,
    }
]