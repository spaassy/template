import { AsyncComponent } from 'spaassy-redux'

let AsyncComp = AsyncComponent('home')

const routers = [
    {
        path: '/',
        exact: true,
        component: AsyncComp(() => import('@views/home/demoOne'))
    },
    {
        path: '/demoTwo',
        component: AsyncComp(() => import('@views/home/demoTwo'))
    }
]

export default routers