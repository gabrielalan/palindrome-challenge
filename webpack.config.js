var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: [
        path.normalize(__dirname + '/src/js/index.jsx')
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
        publicPath: 'dist/'
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                test: /\.jsx?$/,
                include: [path.resolve(__dirname, 'src', 'js')],
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.css$/,    loader: "style-loader!css-loader" },
            { test: /\.woff2?$/, loader: "url-loader?prefix=font/&limit=5000" },
            { test: /\.eot$/,    loader: "file-loader?prefix=font/" },
            { test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
            { test: /\.svg$/,    loader: "file-loader?prefix=font/" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        /*new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true, 
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })*/
    ]
};