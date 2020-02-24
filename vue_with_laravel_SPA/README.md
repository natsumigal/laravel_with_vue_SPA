# Project Build Procedure
### Requirements
  - Docker
  - Node
  - Npm
 
First at all, be sure you download Docker.
And, do these following steps :
```sh
# remove node_modules directory
$ rm -rf node_modules
```
```sh
# clear the npm cache
$ npm cache clear --force 
```
```sh
# install npm dependencies
$ npm install 
```
```sh
# clear the composer cache
$ composer clear-cache
```
```sh
# install composer dependencies
$ composer install
```
```sh
# generate the random key in the application's environment file
$ php artisan key:generate
```
```sh
# serve with hot reload at localhost
$ npm run dev
```
```sh
# copy env file
$ cp .env.example .env
```
# All vue components render in sigle HTML page. Bootstrap css and js file are under public/css,public/js folder
# To API calls,https://www.npmjs.com/package/vue-axios

