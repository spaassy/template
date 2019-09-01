import {
    SpaAssyRegister
} from 'spaassy-redux'
import reducers from '@store'
import routers from '@/views/home/routers'

const namespace = process.env.SYSTEMNAME + 'Sub'

let option = {
    namespace: namespace,
    routers: [...routers],
    reducers: {
        ...reducers
    }
}
const spaassyRegister = new SpaAssyRegister(option)

spaassyRegister.addRouters()
spaassyRegister.registerReducer()