module.exports = {
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(pdf)$/,
            type: 'asset/resource',
            generator: {
                filename: 'static/chunks/[path][name].[hash][ext]'
            },
        });

        return config;
    },
}