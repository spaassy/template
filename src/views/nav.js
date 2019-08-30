import AsyncComponent from '@commonComponents/asyncComponent'

const navConfig = [
    {
        title: '首页',
        path: '/',
        exact: true,
        comp: AsyncComponent('main')(() => import('@views/home'))
    }
];

export default navConfig;