module.exports = {
    webpack(config) {
        const { module = {} } = config;
        return {
            ...config,
            module: {
                ...module,
                rules: [
                    ...(module.rules || []),
                    {
                        test: /\.(pdf)$/,
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            publicPath: `/_next/static/files`,
                            outputPath: "static/files",
                        },
                    },
                ],
            },
        };
    },
}