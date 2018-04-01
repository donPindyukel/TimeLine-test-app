# Написать *Angular* или *VanillaJS* приложение

## Таймлайн событий

Это список событий разных типов, с возможностью сортировки по дате и типу события.

Реализовать добавление событий в список и отображение этого списка. Для финансовой транзакции реализовать возможность удаления из списка, для новости возможность отметить, что с новостью ознакомились.

### Финансовая транзакция:
- Сумма транзакции
- Валюта
- От кого транзакция
- Описание
- Приход или расход
- Дата
- Тип события

> У финансовой транзакции в списке отображаем приход или расход (выделить цветом и знаком +-), сумму, валюта, дата, и от кого транкзация.

> При клике на событие открываем подробную информацию, либо переход на отдельный роут в рамках вашего приложения, либо красиво открыть на той же странице, где есть описание и кнопка “Удалить”.

### Новость:
- Заголовок новости
- Содержание новости
- Дата
- Тип события

> У новости в списке отображаем только заголовок.
> При клике на событие открываем подробную вкладку, где есть описание и кнопка “Ознакомлен”, после того, как нажали “Ознакомлен”, выделить цветом.


# Обязательно:
- Верстка без фреймворков
- github/bitbucket или любой репозиторий, который мы сможем склонировать и посмотреть

# Не обязательно, но крайне желательно:
- **TypeScript**
- **CSS препроцессор (любой)**

# Проект должен быть поддерживаемым и расширяемым. Например, если придется добавить еще одно событие, чтобы не пришлось переписывать весь код для добавления нового события.

# TestApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


