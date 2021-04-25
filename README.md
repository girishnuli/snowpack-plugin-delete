# snowpack-plugin-delete

Deletes the specified folders and files

## Install 

### NPM

```shell
npm i -D snowpack-plugin-delete
```

### Yarn

```shell
yarn add -D snowpack-plugin-delete
```


## To use, add the plugin to your snowpack.config.js file 

```js
module.exports = {
  plugins: [
    [
      'snowpack-plugin-delete',
      {
        delete: [
          'build/dist',
          '*.bak'
        ],
      },
    ],
  ],
};
```

## rimraf API

This plugin uses the npm package [rimraf](https://github.com/isaacs/rimraf).
Refer to it for the glob patterns that you can pass in delete array.
