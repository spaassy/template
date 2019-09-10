import { AsyncComponent } from 'spaassy-redux'

import {
    SpaAssyRegister
} from 'spaassy-redux'


const spaassyRegister = new SpaAssyRegister()

const subRouters = spaassyRegister.getRouters()
let subRouterList = []
Object.keys(subRouters).map(o => {
    subRouterList.push(...subRouters[o])
})

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
    },
    ...subRouterList
]

export default routers