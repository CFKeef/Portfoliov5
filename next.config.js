module.exports = {
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(pdf)$/,
            type: 'asset/resource',
            generator: {
                filename: 'static/chunks/[path][name].[hash][ext]',
                basePath: "https://www.patryck.dev/"
            },
        });

        return config;
    },
}