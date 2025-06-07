Notes App

Це простий CRUD застосунок для створення, редагування, видалення та пошуку нотаток. Побудований на стеку: React (frontend) + Express (backend) + File Storage (JSON).

Функціонал

- Додавання нотаток
- Редагування нотаток
- Видалення нотаток
- Пошук нотаток за заголовком
- Адаптивний дизайн


Встановлення та запуск

1. Клонування репозиторію

```bash
git clone https://github.com/kattriinaa/Notes-App.git
cd Notes-App
```

2. Встановлення залежностей

Сервер (backend)

```bash
cd backend
npm init -y
npm install express cors body-parser fs uuid
```

Клієнт (frontend)

```bash
cd ../frontend
npm install axios
```

---

Запуск
У режимі розробки

1. Запустити сервер

```bash
cd backend
node server.js
```

Сервер запуститься на `http://localhost:5000`.

2. Запустити клієнт

```bash
cd ../frontend
npm start
```

Клієнт запуститься на `http://localhost:3000`.

Структура проєкту

```
Notes-App/
│
├── frontend/              # React фронтенд
│   ├── src/
│   └── public/
│
├── backend/              # Express сервер
│   ├── routes/
│   ├── utils/
│   └── data/notes.json  # Локальне сховище нотаток
│
└── README.md
```