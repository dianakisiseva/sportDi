const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({
    stats: {
        children: true,
    },});

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .webpackConfig(
        {
            output: {
                chunkFilename: 'js/[name].js?id=[chunkhash]'
            }
        }
    )
    .options(
        {
            processCssUrls: false
        }
    )
    .sourceMaps(false, 'source-map')
    .copyDirectory('resources/assets', 'public/assets', false)
    .version()
    .sourceMaps(false, 'source-map')

if (mix.inProduction()) {
    mix.version();
}

