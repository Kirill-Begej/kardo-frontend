___
# Мобильное приложение "Кардо"
Репозиторий мобильного приложения Международной премии КАРДО. Данное приложение выполняется в рамках Хакатона+ КАРДО, в репозитории представлена frontend-часть приложения команды №2. Основная задача хакатона: создание MVP мобильного приложения Международной премии КАРДО.
___

## Содержание
- [Основная задача хакатона](#основная-задача-хакатона)
- [Статус проекта](#статус-проекта)
- [Сведения о команде](#сведения-о-команде)
- [Ссылка на деплой приложения](#ссылка-на-деплой-приложения)
- [Полезные ссылки](#полезные-ссылки)
- [Стек используемых технологий](#стек-используемых-технологий)
- [Брендбук проекта](#брендбук-проекта)
- [Установка проекта](#установка-проекта)
- [Запуск проекта](#запуск-проекта)
- [Проверка линтинга](#проверка-линтинга)
___

## Основная задача хакатона
Создание MVP мобильного приложения Международной премии КАРДО.
___

## Статус проекта
Проект в процессе разработки.
___

## Сведения о команде
Команда №2:
- Prodject менеджер: Надежда Денисова
- Product менеджер: Вероника Кусакина
- Дизайнеры: Анастасия Алексеева, Виктория Аскинази, Ирина Белокрылова
- Фронтенд разработчики: [Кирилл Бегей](https://github.com/kirill-Begej), [Иван Чернышев](https://github.com/VanyaGachist2)
- Бэкенд разработчики: Александр Литвинов, Теймур Османов
- QA: Роман Неклюдов, Елена Смирнова
___

## Ссылка на деплой приложения
[Kardo-Project](https://kardo-frontend-zeta.vercel.app/)
___

## Полезные ссылки
- [Страница онбординга проекта](https://norikov.notion.site/568508697c74422d8077142bb7449791)
- [Техническое задание проекта](https://disk.yandex.ru/d/fikfo1dHbaYXIw)
- [Дизайн-макет проекта](https://www.figma.com/design/AE3HDcsJW1TVgCAPs41hGM/%D0%9A%D0%90%D0%A0%D0%94%D0%9E?node-id=0-1&t=4d9uFUM08EaUvUH8-0)
- [Miro проекта](https://miro.com/app/board/uXjVK1qJFAA=/)
___

## Стек используемых технологий
- [HTML5](https://dev.w3.org/html5/spec-LC/)
- [CSS3](https://www.w3.org/Style/CSS/)
- [Feature-Sliced Design](https://feature-sliced.design/ru/docs)
- [Webpack](https://webpack.js.org/)
- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
___

## Брендбук проекта
[Ссылка на шрифты, изображения, логотипы используемые в проекте](https://drive.google.com/drive/folders/1r16v19Z-oE0mTDHv948GKLwi9FjuP9l9?usp=drive_link)
___

## Установка проекта
Для установки зависимостей и запуска проекта необходим [NodeJS](https://nodejs.org/en).  

Клонируйте проект при помощи HTTPS:
```sh
$ git clone https://github.com/Kirill-Begej/kardo-frontend.git
```

Клонируйте проект при помощи SSH:
```sh
$ git clone git@github.com:Kirill-Begej/kardo-frontend.git
```

Для установки зависимостей выполните команду:
```sh
$ npm i
```
___

## Запуск проекта
Чтобы запустить сервер для разработки используйте команду:
```sh
npm run start
```

Чтобы выполнить development сборку используйте команду: 
```sh
npm run build:dev
```

Чтобы выполнить production сборку используйте команду: 
```sh
npm run build
```
___

## Проверка линтинга
Для проверки TypeScript-файлов используется ESLint с конфигурацией airbnb-base.

Чтобы проверить ts-файлы используйте команду:
```sh
npm run lint:ts
```

Чтобы проверить ts-файлы и исправить их используйте команду:
```sh
npm run lint:ts:fix
```

Для проверки CSS-файлов используется Stylelint.

Чтобы проверить css-файлы используйте команду:
```sh
npm run lint:css
```

Чтобы проверить css-файлы и исправить их используйте команду:
```sh
npm run lint:css:fix
```
___
