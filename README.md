# 🛠️ Table Lock API – Backend Test Project

This is a simple Node.js + Express REST API that simulates **table locking and unlocking functionality** — useful for scenarios like restaurant booking, shared workspaces, or game table sessions. It uses **TypeScript**, **in-memory storage**, and no database.

---

## 📦 Features

- ✅ Lock a table for a limited duration
- ✅ Unlock a table (only by the user who locked it)
- ✅ Check lock status of a table

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/sakincse21/BackendTestProject.git
cd BackendTestProject
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

```bash
cp .env.example .env
```

You can set:

```env
PORT=5000
NODE_ENV=development
```

### 4. Run the server (dev mode)

```bash
npm run dev
```

Server will start on: `http://localhost:5000`

---

## 📨 API Endpoints

Base path: `/api/tables`

| Method | Endpoint              | Description                    |
|--------|------------------------|--------------------------------|
| POST   | `/lock`                | Lock a table                   |
| POST   | `/unlock`              | Unlock a table                 |
| GET    | `/:tableId/status`     | Get lock status of a table     |

### 🔐 Lock Table

```http
POST /api/tables/lock
```

**Body:**

```json
{
  "tableId": "table-123",
  "userId": "user-abc",
  "duration": 600
}
```

---

### 🔓 Unlock Table

```http
POST /api/tables/unlock
```

**Body:**

```json
{
  "tableId": "table-123",
  "userId": "user-abc"
}
```

---

### 🔍 Get Table Status

```http
GET /api/tables/table-001/status
```

**Response:**

```json
{
  "isLocked": false
}
```

---

## 📁 Project Structure

```
sakincse21-backendtestproject/
├── src/
│   ├── app.ts                 # Express app setup
│   ├── server.ts              # Server bootstrap
│   └── app/
│       ├── configs/env.ts     # Env loader
│       ├── routes/            # Central route handler
│       └── modules/table/
│           ├── table.route.ts
│           ├── table.service.ts
│           ├── table.controller.ts
│           └── table.interface.ts
├── .env.example
├── package.json
├── tsconfig.json
├── LICENSE
```

---

## 📦 Postman Collection

You can import the `BackendTestProject.postman_collection.json` file to test all 3 endpoints.

---

## 🧪 Scripts

```bash
npm run dev    # Start server using ts-node-dev
npm run lint   # Run ESLint check
```

---

## 📬 Contact

If you have any questions, contact me at:

**GitHub:** [@sakincse21](https://github.com/sakincse21)