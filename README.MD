# GROUP 3
- 1	NSHIMIYIMANA Jean Nepo
- 2	HAKIZIMANA Theogene
- 3	AKIMANA Gabriel
- 4	HABIMANA Sixbert

# tRPC Express API (TypeScript)

This project is a simple **tRPC server built with Express and TypeScript**.  
It demonstrates how to create **type-safe APIs** using tRPC and Zod, without REST endpoints.

The API exposes procedures to **fetch blog posts** from an in-memory data source.

---

## 🚀 Features

- Type-safe API using **tRPC**
- Input validation with **Zod**
- Express.js server
- TypeScript support
- Simple blog posts example (no database)

---

## 🛠 Tech Stack

- **Node.js**
- **TypeScript**
- **Express**
- **tRPC**
- **Zod**

---

## 📁 Project Structure

.
├── server.ts # Main server file <br>
├── package.json <br>
├── tsconfig.json <br>
└── README.md<br>

---

## 📦 Installation

1. Clone the repository:

```bash
   git clone https://github.com/akimanagabriel/TRPC-IN-CLOUD-COMPUTING
   cd TRPC-IN-CLOUD-COMPUTING
```

Install dependencies:

```bash
npm install
```

▶️ Running the Server
Start the development server:

```bash
npm run dev
```

or if you are using ts-node directly:

npx ts-node server.ts
The server will run at:

http://localhost:3000
tRPC endpoint:

http://localhost:3000/trpc
🔗 API Procedures
1️⃣ Get All Posts
Procedure: getAllPosts
Type: Query
Description: Returns all blog posts.

2️⃣ Get Single Post by ID
Procedure: getPost
Type: Query

Input:

{
id: number
}
Description: Fetches a single post by its ID.
If the post is not found, an error is returned.

🧪 Sample Data
The project uses an in-memory array of posts for demonstration purposes.
No database is required.

🎯 Use Case
This project is ideal for:

Learning tRPC basics

Teaching type-safe APIs

Student demos and practice projects

Understanding Express + tRPC integration


