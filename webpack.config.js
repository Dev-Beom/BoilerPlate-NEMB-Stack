import { join, resolve } from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
    // enntry file
    entry: ['@babel/polyfill', './views/src/js/main.js', './views/src/sass/main.scss'],
    // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
    output: {
        path: join(resolve(), 'public'),
        filename: 'javascripts/bundle.js'
    },
    plugins: [
        // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
        new MiniCssExtractPlugin({ filename: './stylesheets/style.css' })
    ],
    module: {
        rules: [{
                test: /\.js$/,
                include: [
                    join(resolve(), '/src/js')
                ],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map',
    // https://webpack.js.org/concepts/mode/#mode-development
    mode: 'development'
};