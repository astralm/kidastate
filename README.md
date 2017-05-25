# kidastate ![npm version](https://img.shields.io/badge/node-6.10.3%20or%207.10.0-blue.svg)
## Сборка, запуск и тестирование

Для того чтобы собрать проект необходимо в консоли директории где будет установлено приложение выполнить следующее:
1. ```git clone https://github.com/astralm/kidastate.git .```
2. ```npm i```
3. ```npm run build```
---
Команда для запуска локального сервера для разрабоки: 
* ```webpack-dev-server```

Для ручного определения хоста необходимо добвить --host <HOST>
* ```webpack-dev-server --host 185.22.61.149``` 

Для успешного запуска иногда необходимо установить глобально webpack-dev-server и webpack:
* ```npm i -g webpack-dev-server webpack```
---
Команды для запуска тестов:
* ```npm run test```
* ```npm run test:watch```
