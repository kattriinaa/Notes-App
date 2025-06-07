Notes App
Простий CRUD-додаток для створення, редагування та видалення нотаток. Складається з бекенду на Node.js + Express та фронтенду на React.

Структура проєкту
root/
├── backend/          # Express сервер
│   ├── data/         # JSON-файл з нотатками
│   ├── routes/       # Ендпоінти API
│   └── utils/        # Робота з файлами
├── frontend/         # React-додаток
└── README.md

Запуск проєкту
Передумови
Node.js (рекомендовано: версія 18+)
    npm або yarn

1. Клонування репозиторію
git clone https://github.com/kattriinaa/Notes-App.git
cd Notes-App

2. Установка залежностей
Бекенд
cd backend
npm install

Фронтенд
cd ../frontend
npm install

3. Запуск
Запустити бекенд
cd backend
node index.js
Сервер запуститься на http://localhost:5000

Запустити фронтенд
cd ../frontend
npm start
React-додаток відкриється на http://localhost:3000

API ендпоінти
GET /notes – отримати всі нотатки

POST /notes – створити нову нотатку

PUT /notes/:id – оновити нотатку

DELETE /notes/:id – видалити нотатку

Можливості
- Додавання нових нотаток
- Редагування існуючих
- Видалення
- Пошук за заголовком
- Адаптивний інтерфейс

