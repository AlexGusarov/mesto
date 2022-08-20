{
    "name": "mesto",
    "version": "1.0.0",
    "description": "Интерактивный сервис, где можно добавлять фото и информацию о пользователях, а также ставить лайки. Лайв-валидация полей реализована в парадигме ООП для удобства дальнейшего развития и поддержки.",
    "main": "index.js",
    "scripts": {
      "build": "rm -rf dist && webpack",
      "dev": "webpack serve"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/AlexGusarov/mesto.git"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/AlexGusarov/mesto/issues"
    },
    "homepage": "https://github.com/AlexGusarov/mesto#readme",
    "devDependencies": {
      "@babel/core": "^7.18.10",
      "@babel/preset-env": "^7.18.10",
      "autoprefixer": "^10.4.8",
      "css-loader": "^6.7.1",
      "cssnano": "^5.1.13",
      "html-webpack-plugin": "^5.5.0",
      "mini-css-extract-plugin": "^2.6.1",
      "postcss-loader": "^7.0.1",
      "webpack": "^5.74.0",
      "webpack-cli": "^4.10.0",
      "webpack-dev-server": "^4.10.0"
    },
    "dependencies": {
      "core-js": "^3.24.1"
    }
  }
  