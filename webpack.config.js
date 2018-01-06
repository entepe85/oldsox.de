const path = require('path');

module.exports = {
    entry: {
        app: ['./src/es6/app.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{ test: /\.jsx?$/, loader: 'babel-loader' }]
    }
};
