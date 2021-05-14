import NotFound from 'components/NotFound';
import { lazy } from 'react';

const Register = lazy(() => import('pages/Register'));

export const routes = [
    {
        exact: true,
        path: '/register',
        component: Register,
    },
    {
        component: NotFound,
    }
]