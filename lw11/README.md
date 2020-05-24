# Лабораторная работа 11

## Задание
При реализации этой лабораторной код из 6й лабораторной нужно скопировать в папку lw11.

- [ ] 1)	Реализовать сохранение feedback из 6 лабораторной с использованием базы данных. Схему базы (описание таблиц) нужно закоммитить в репозиторий по пути src/schema/database.sql.
- [ ] 2)	Настроить локальный сервер. Нужно установить nginx. Придумать доменное имя вашего сайта. Настроить окружение. Конфигурационный файл nginx, нужно закоммитить по пути ~conf/nginx/nginx.conf.

Важно в конфиге nginx root должен быть указан на папку web!

## Структура проекта

```
 src/
   config/
	   сonfig.php (тут должны лежать константы)
   pages/
	   main_page.php (или MainPage.php в случае, если используется класс)
     save_feedback_page.php (или SaveFeedbackPage.php)
     feedbacks_list_page.php (или FeedbacksListPage.php)
   schema/
	   database.sql
   templates/
	   main.tpl.php
	   feedbacks.tpl.php
   utils/
	   request.php (или Request.php)
	   template.php (или Template.php)
     database.php (или Database.php)
   common.inc.php
 web/
   css/
   images/
   index.php
   feedbacks.php
 ~conf/
   nginx/
	 nginx.conf
 README.md
```
