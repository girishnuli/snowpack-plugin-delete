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
        patterns: [
          'build/dist',
          'something-else'
        ],
      },
    ],
  ],
};
```

## rimraf

This plugin uses the npm package [rimraf] (https://github.com/isaacs/rimraf).

## Credits
Inspired by https://github.com/donniean/snowpack-plugin-copy