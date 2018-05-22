
import CompanyPage from '../page/homePage/components/companyPage';
import LoginForm from '../page/loginAndRegistration/components/forms/loginForm';
export const routes: any = [
    {
        path: '/',
        component: CompanyPage,
        childRoutes: []
    },
    {
        path: '/login',
        component: LoginForm,
        childRoutes: []
    }
];
