/// <reference path="../@types/prerender-spa-plugin/index.d.ts" />

import * as path from 'path';
import * as merge from 'webpack-merge';

import * as baseCfg from './webpack.base.config';

import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import * as OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import * as FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import * as PrerenderSPAPlugin from 'prerender-spa-plugin';
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
import CleanWebpackPlugin from 'clean-webpack-plugin';

import buddha from './buddha';

module.exports = merge(baseCfg, {
    mode: 'production',
    entry: {
        'index': [path.resolve("src/index.ts")]
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        chunkFilename: 'modules/[name].js'
    },
    devtool: false,
    optimization: {
        splitChunks: false,
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false,
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    safe: true
                },
            }),
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: 'modules/[name].css'
        }),
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: [
                    ...buddha
                ],
                notes: [],
            },
            clearConsole: false
        }),
        new PrerenderSPAPlugin({
            staticDir: path.join(__dirname, '../../dist'),
            routes: ['/', '/guide'],
            renderer: new Renderer({
                inject: {
                    foo: 'bar'
                },
                headless: false,
                renderAfterDocumentEvent: 'render-event'
            })
        })
    ],
})
