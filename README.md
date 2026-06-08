)
📌 Task Management Backend API

A secure and scalable Task Management REST API built using Node.js, Express, Prisma ORM, and PostgreSQL, featuring JWT-based authentication and full CRUD operations with user-level data protection.

🚀 Features
🔐 Authentication
User Registration
User Login with JWT
Password secured using hashing (bcrypt)
Protected routes using middleware
📌 Task Management
Create Task
Get all tasks (only logged-in user’s tasks)
Update Task
Delete Task
🔒 Security
JWT token-based authentication
Each user can access only their own tasks
Protected API routes using middleware
🗄 Database
PostgreSQL database
Prisma ORM for schema management
Automated migrations
🛠 Tech Stack
Node.js
Express.js
Prisma ORM
PostgreSQL
JSON Web Token (JWT)
bcryptjs
dotenv
📁 Project Structure
backend/
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json
└── README.md
⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/RishithaDigumarthi/primetrade-backend.git
cd primetrade-backend
2. Install dependencies
npm install
3. Setup environment variables

Create a .env file:

DATABASE_URL=postgresql://postgres:postgres123@localhost:5432/primetrade_db
JWT_SECRET=your_secret_key
PORT=5000
4. Run Prisma migrations
npx prisma migrate dev --name init
5. Start server
npm run dev

Server runs on:

http://localhost:5000
📊 Prisma Studio (Database Viewer)
npx prisma studio

Runs at:

http://localhost:5555
🔑 API Endpoints
🔐 Auth Routes
Register User → POST /api/v1/auth/register
Login User → POST /api/v1/auth/login
📌 Task Routes (Protected 🔐)

⚠️ All task routes require JWT token in Authorization header:

Authorization: Bearer <your_token>
Create Task → POST /api/v1/tasks
Get All Tasks → GET /api/v1/tasks
Update Task → PUT /api/v1/tasks/:id
Delete Task → DELETE /api/v1/tasks/:id
🧪 Example Request
POST /api/v1/tasks
{
  "title": "My First Task",
  "description": "Testing backend API"
}
🔐 Authentication Flow
Register user → /register
Login user → /login
Get JWT token
Use token in all task APIs:
Bearer YOUR_TOKEN
📌 Key Highlights
REST API development
Authentication & authorization
Prisma ORM integration
PostgreSQL database support
Clean modular architecture
Production-ready backend
🎯 Project Outcome

This project demonstrates:

REST API development
Authentication & authorization
Database design with Prisma
Secure backend architecture
Real-world CRUD system
⭐ Status

✔ Fully functional backend
✔ Authentication working
✔ CRUD operations tested
✔ Ready for evaluation

👩‍💻 Author

Rishitha Digumarthi

📜 License

This project is created for internship/assessment purposes.