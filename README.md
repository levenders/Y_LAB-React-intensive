## Вводное задание

Сделать удобную и красивую форму аутентификации через почту и пароль — но без готовых библиотек компонентов. Нужно продумать отправку почты/пароля на сервер, но сервер можно не делать, просто замокав `fetch()`.

## Реализована следующая функциональность:

- использован typescript
- для стилизации компонентов использовался styled-components
- настроен [автофокус](https://github.com/levenders/Y_LAB-React-intensive/blob/main/src/components/Form/Form.tsx#L31)
- настроена [валидация](https://github.com/levenders/Y_LAB-React-intensive/blob/main/src/components/Validation/Validation.tsx) на пустые строки при отправке формы
- приложение адаптировано под мобильные устройства
- при отправке формы в консоль выводится [ответ](https://github.com/levenders/Y_LAB-React-intensive/blob/main/src/api/Api.ts#L12)

## Деплой:

[Посмотреть готовое задание](https://levenders.github.io/Y_LAB-React-intensive/).

## После проверки:

- добавлена проверка [длину вводимого пароля](https://github.com/levenders/Y_LAB-React-intensive/blob/main/src/components/Form/Form.tsx#L53)
- добавлена обратная связь для пользователя об успешной авторизации
