<h1 align="center">Minimal Webpack Boilerplate</h1>

WAT ? An other boilerplate ?!!?

## Why 
Because sometimes you don't want to copypaste old conf but you still need a dev server with ONLY ES6+ transpilation that works quickly.

There are other boilerplate with [webpack](https://github.com/webpack/example-app), [webpack + redux](https://github.com/noderaider/redux-webpack-boilerplate),  [webpack+react webpack](https://github.com/gaearon/react-hot-boilerplate), [webpack +++](https://github.com/davezuko/webpack-boilerplate)  but sometimes this is too big .

##How

This project set a minimal structure 

    src/       --> your app sources + index.html template
    conf/      --> webpack configuration
    .babelrc   --> es2015 babel preset
    .eslintrc  --> recommended + es6 env


Webpack takes your sources as input and make a build WITH developpement additions. So **Don't use it direcly for production**

The html plugin let you specify your index.html template ( in src folder ) . By this way, you don't have to worry about your dependencies and you can have fun without waiting

```
npm i *whatever*
```

```
//In a .js file
import {something} from "whatever"
```


It uses webpack-dev-server with live-reload enabled by default.

To run the dev server : 
### `npm run dev`

##Use It
It can be easily added in your project with git
```
mkdir myproject && cd myproject
git init .
git remote add boilerplate https://github.com/maxdow/minimal-webpack-boilerplate.git
git fetch boilerplate
git merge boilerplate/master
npm install
npm run dev
```

Then open your browser at localhost:3000 and edit files in src foler.

##TODO
* []  Add css injection
* [] Add production task
* [] CLI to add features on demand
