const webpackConfig = require("./webpack.config");
const svelteNativePreprocessor = require("svelte-native-preprocessor");

module.exports = env => {
    const config = webpackConfig(env);
    config.resolve.extensions = [".ts", ".mjs", ".js", ".svelte", ".scss", ".css"];
    config.module.rules.push({
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'svelte-loader-hot',
                options: {
                    preprocess: svelteNativePreprocessor(),
                    hotReload: true,
                    hotOptions: {
                        native: true
                    }
                }
            }
        ]
    });

    // insert the mjs loader after ts-loader
    const tsLoaderRule = config.module.rules.find(r => r.use.loader === "ts-loader");
    const indexOfTsLoaderRule = config.module.rules.indexOf(tsLoaderRule);
    const mjsRule = {
        test: /\.mjs$/,
        type: 'javascript/auto',
    };
    config.module.rules.splice(indexOfTsLoaderRule, 0, mjsRule);

    return config;
};