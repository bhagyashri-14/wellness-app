# wellness-app
# Wellness Session Manager

A full-stack app that allows users to register, log in, and manage their own wellness sessions (like yoga/meditation flows).  
Features include session auto-save, draft/publish, and a dashboard for managing your sessions.

---

## Features

- User registration & login (JWT Auth)
- Create, edit, auto-save, and publish wellness sessions
- Dashboard to view and edit your sessions
- Visual feedback on auto-save (toasts)
- Responsive UI
- RESTful API (Node.js, Express, MongoDB)
- Clean code & error handling

---

## Demo

> _Optional: Add your deployment link here after deploying!_

---

## Quickstart

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (local or [MongoDB Atlas](https://www.mongodb.com/atlas/database))

---

### 1. Clone the repo

```bash
git clone https://github.com/bhagyashri-14/wellness-session-manager.git
cd wellness-session-manager
```

---

### 2. Backend Setup

```bash
cd server
npm install
cp .env.example .env
# Edit .env to set your MongoDB URI and JWT secret if desired
npm run dev
```
- The backend will run on `http://localhost:4000`

---

### 3. Frontend Setup

Open a new terminal window:

```bash
cd client
npm install
npm start
```
- The frontend will run on `http://localhost:3000`

---

### 4. Usage

- Register a new account or log in
- Create new wellness sessions (title, tags, JSON URL)
- Edits are auto-saved (after 5s inactivity or every 30s)
- Save drafts and publish sessions
- View and manage sessions from your dashboard

---

## Environment Variables

#### `server/.env`

```env
MONGO_URI=mongodb://localhost:27017/wellnessapp
JWT_SECRET=your_jwt_secret_here
PORT=4000
```

---

## Folder Structure

```
wellness-session-manager/
  client/   # React frontend
  server/   # Node.js backend
```

---

## Deployment

- **Frontend:** Deploy on [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)
- **Backend:** Deploy on [Render](https://render.com/), [Railway](https://railway.app/), or [Heroku](https://heroku.com/)
- Set environment variables for production!

---


## Credits

Created by [@bhagyashri-14](https://github.com/bhagyashri-14)
