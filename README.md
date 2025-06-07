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
git clone https://github.com/your-username/notes-app.git
cd notes-app
```

2. Встановлення залежностей

Сервер (backend)

```bash
cd server
npm install
```

Клієнт (frontend)

```bash
cd ../client
npm install
```

---

Запуск
У режимі розробки

1. Запустити сервер

```bash
cd server
npm start
```

Сервер запуститься на `http://localhost:5000`.

2. Запустити клієнт

```bash
cd ../client
npm start
```

Клієнт запуститься на `http://localhost:3000`.

Структура проєкту

```
notes-app/
│
├── client/              # React фронтенд
│   ├── src/
│   └── public/
│
├── server/              # Express сервер
│   ├── routes/
│   ├── utils/
│   └── data/notes.json  # Локальне сховище нотаток
│
└── README.md
```