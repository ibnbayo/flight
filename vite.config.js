import path from 'path';

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '.'),
        },
    },
    build: {
        assetsInlineLimit: '102400', // 2kb
        chunkSizeWarningLimit: '102400', // 2kb
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, '/index.html'),
                plane: path.resolve(__dirname, 'projects/plane/index.html'),

            },
        },
    },
};
