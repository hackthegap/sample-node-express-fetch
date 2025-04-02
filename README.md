
# Sample Node + Express + Fetch API Project

This project demonstrates how to create a simple **Node.js + Express** server that interacts with an external API — in this case, [JSONPlaceholder](https://jsonplaceholder.typicode.com/). It's designed to help beginners understand:

- Setting up an Express server
- Using the `fetch` API in Node.js (via `node-fetch`)
- Making HTTP requests (GET, POST, PUT, PATCH, DELETE)
- Applying a basic MVC structure using controllers and routers

## 🚀 Features

- Express-based backend
- Proxies requests to JSONPlaceholder
- Full CRUD support for `/posts`
- Simple MVC folder structure (in the `express-with-mvc` branch)

## 📁 Branches

- `main`: Flat, single-file version
- `express-with-mvc`: MVC-style organization using `app.js`, routers, and controllers

## ✅ Requirements

- Node.js 18+ (for ESM + fetch support or use `node-fetch@2`)
- NPM

## 🔧 Installation & Setup

```bash
# Clone the repo
git clone https://github.com/hackthegap/sample-node-express-fetch.git
cd sample-node-express-fetch

# Install dependencies
npm install

# Start the server
npm start
```

The server will be running at:

```
http://localhost:3000
```

## 📡 Example API Endpoints

| Method | Endpoint                    | Description                 |
|--------|-----------------------------|-----------------------------|
| GET    | `/posts`                    | List all posts              |
| GET    | `/posts/:id`                | Get a single post           |
| GET    | `/posts/:id/comments`       | Get comments for a post     |
| POST   | `/posts`                    | Create a new post           |
| PUT    | `/posts/:id`                | Fully update a post         |
| PATCH  | `/posts/:id`                | Partially update a post     |
| DELETE | `/posts/:id`                | Delete a post               |

## 🧑‍💻 Created By

**Fabricio Braga**  
GitHub: [hackthegap](https://github.com/hackthegap)  
_Last updated: 2 Apr 2025_

```

Let me know if you’d like me to generate a version for the `main` branch too or add badges/shields (like Node version, etc.)!