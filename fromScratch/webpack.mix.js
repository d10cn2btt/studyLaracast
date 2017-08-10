let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app_vue.js', 'public/js/app_vue.js');

mix.sass('resources/assets/sass/app.scss', 'public/css');
mix.copy('resources/assets/css', 'public/css');

mix.copy('resources/assets/images', 'public/images');
mix.copy('resources/assets/fonts', 'public/fonts');
mix.copy('resources/assets/css', 'public/css');
mix.combine(
    [
        'resources/assets/js/jquery.js',
        'resources/assets/js/bootstrap.min.js',
        'resources/assets/js/lodash.min.js',
        'resources/assets/js/function.js',
        'resources/assets/js/moment.min.js',
    ],
    'public/js/core.js'
);
