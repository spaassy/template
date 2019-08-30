const path = require('path')

module.exports = {
    server: {
        host: '127.0.0.1',
        port: 9000,
        proxy: [
            // {
            //     path: '/api',
            //     option: {
            //         target: 'http://127.0.0.1:8989',
            //         pathRewrite: {
            //             '^/api': "/"
            //         },
            //         changeOrigin: true
            //     }
            // }
        ]
    },
    webpack: {
        env_variable: {
            // 系统级别，独立作为spa应用设置为“SPA”, 作为spaassy应用设置为“SPAASSY”
            'process.env.PROJECTTYPE': JSON.stringify('SPAASSY'),

            // 系统名称，会被作为系统的命名空间, 自定义命名
            'process.env.SYSTEMNAME': JSON.stringify('main')
        },
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@http': path.resolve(__dirname, 'src/httpServer'),
            '@views': path.resolve(__dirname, 'src/views'),
            '@commonComponents': path.resolve(__dirname, 'src/commonComponents'),
            '@store': path.resolve(__dirname, 'src/store')
        }
    }
}