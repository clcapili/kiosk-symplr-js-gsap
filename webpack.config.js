const path = require('path');

module.exports = {
    name: 'symplr',
    mode: 'development', // production / development
    entry: './src/js/main.js',
    output: {
         // the output of the webpack build will be in /dist directory
         path: path.resolve(__dirname, 'public/js'),
         // the filename of the JS bundle will be bundle.js
         filename: '[name].bundle.js',
         chunkFilename: '[name].chunk.bundle.js',
    },
    devtool: 'cheap-module-source-map',
    optimization: {
        concatenateModules: true,
        minimize: true,
    },
    module: {
        rules: [
            {
                // for any file with a suffix of js or jsx
                test: /\.js|\.jsx$/,
                // ignore transpiling JavaScript from node_modules as it should be that state
                exclude: /node_modules/,
                // use the babel-loader for transpiling JavaScript to a suitable format
                loader: 'babel-loader',
                options: {
                    // attach the presets to the loader (most projects use .babelrc file instead)
                    presets: ["@babel/preset-env"]
                }
            }
        ]
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            test: ''
        })
    }
};