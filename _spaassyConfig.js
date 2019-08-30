const path = require('path')

module.exports = {
    server: {
        host: '127.0.0.1',
        port: 9000,
        proxy: [{
            path: '/api',
            option: {
                target: 'http://127.0.0.1:8989',
                pathRewrite: {
                    '^/api': "/"
                },
                changeOrigin: true
            }
        }]
    },
    webpack:{
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