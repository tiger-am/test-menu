# Запуск
- установить зависимости `yarn` или `npm i`
- запустить `yarn postinstall` или `npm run postinstall`
- запустить приложение `yarn start` или `npm run start`

приложение доступно по ссылке http://localhost:8000

# ТЗ
Создать SPA приложение "Меню блюд" с функционалом:

1) приложение загружает файл menu.json.
2) отображает его содержание в таблице со столбцами:
- title
- image
- rating
- price
3) позволяет открыть в модальном окне детализацию по инградиентам выбранного блюда меню - вложенный объект ingredients
4) позволяется задать сортировку по любому выбранному (одному) столбцу (по убыванию, возрастанию)
5) позволяет провести фильтрацию по содержанию всей таблицы и по содержанию конкретного столбца -  поля с фильтрами расположить над таблицей. Фильтры можно обнулить все сразу (сбросить)
6) Параметры сортировки и фильтрации сохранять в localstorage для восстановления при следующем входе

Необходимо использовать:
В качестве скелета приложения скелетон Angular Seed https://github.com/angular/angular-seed
AngularJS (1.x) 
Bootstrap 3

Желательно использовать: 
UI Bootstrap (https://angular-ui.github.io/bootstrap/)
