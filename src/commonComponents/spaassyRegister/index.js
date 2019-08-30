// let option = {
//     namespace: '',
//     routers: [],
//     reducers: []
// }

class SpaasyRegister {
    namespace = null
    routers = []
    reducers = []

    constructor(option) {
        this.namespace = option.namespace
        this.routers = option.routers
        this.reducers = option.reducers

        this.init()
    }

    init() {
        window.subProject = window.subProject || {
            routers: {},
            reducers: {},
            updataStore: null
        }
    }

    createUpdataStore = (fuc) => {
        if (!window.subProject.updataStore) {
            console.info(`updataStore已存在！`)
        }
        window.subProject.updataStore = func
    }

    addRouters = () => {
        if (!this.routers || this.routers.length == 0) {
            console.info(`${this.namespace} 没有router可注册！`)
            return
        }
        window.subProject.routers[this.namespace] = {
            ...this.routers
        }
    }

    addReducers = () => {
        if (!window.subProject || !window.subProject.updataStore) {
            console.error("主程序，没有启用!请检查主程序spaassyProvider组件的mainProject属性设置！")
            return
        }

        if (!this.reducers || this.reducers.length == 0) {
            console.info(`${this.namespace} 没有reduce可注册！`)
            return
        }

        window.subProject.reducers[this.namespace] = {
            ...this.reducers
        }
        window.spaassy.updataStore(this.namespace, {
            ...this.reducers
        })
    }

    getRouters = (arg) => {
        if (!arg) {
            return window.subProject.routers
        }

        if (!window.subProject.routers[arg]) {
            console.info(`没有命名空间为${arg}的router`)
            return []
        }

        return window.subProject.routers[arg]
    }

    getReducers = (arg) => {
        if (!arg) {
            return window.subProject.reducers
        }

        if (!window.subProject.reducers[arg]) {
            console.info(`没有命名空间为${arg}的reducer`)
            return []
        }

        return window.subProject.reducers[arg]
    }
}

export default SpaasyRegister