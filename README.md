# Webpack

## Install NPM Packages

```
yarn
```
or
```
npm i --force
```

## Run dev server

```
yarn start
```
or
```
npm start
```

## Build project

```
yarn build
```
or
```
npm run build
```

# Робота з Webpack

## Створення нової сторінки

Після додавання нової html сторінки потрібно в файл webpack.common.js
```
new HtmlWebpackPlugin({
  template: "./src/сторінка.html",
  filename: "сторінка.html",
  inject: "body",
}),
```

## Робота з стилями

В папці styles є **main.scss** в якому ми повинні імпортувати нові створені стилі в папці **components**.\
Імпорт робимо таким чином:
```
@import "components/нові_стилі";
```

Також в index.js є обов'язковою строка:
```
import "../styles/main.scss";
```

## Media Mixin

Є 5 основних брейкпоінтів:
```
'xs': 320px
'sm': 576px
'md': 768px
'lg': 992px
'xl': 1200px
```

Також є значення min, що еквівалентно:
```
@media only screen and (min-width: ***)
```

Значення max, що еквівалентно:
```
@media only screen and (max-width: ***)
```

Використання mixin:

```
@include media('min', 'md');
```