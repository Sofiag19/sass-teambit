let mix = require('laravel-mix');


mix
  .js('src/js/script.js', 'public/js/script.js')
  .sass('src/scss/style.scss', 'public/css/style.css')
  .copyDirectory('src/html/','public/');
