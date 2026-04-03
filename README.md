# 🔐 MERN Authentication Service

A secure authentication system built using the MERN stack (MongoDB, Express, React, Node.js) with JWT-based authorization and password hashing.

---

## 🚀 Features

* User Registration & Login
* Password hashing using bcrypt
* JWT-based authentication
* Protected routes using middleware
* Error handling
* REST API architecture

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JSON Web Token (JWT)
* bcrypt
* dotenv

---

## 📂 Folder Structure

mern-auth-service/
│── controllers/
│── models/
│── routes/
│── middleware/
│── config/
│── .env
│── server.js

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/Anshul-soni-dev/mern-auth-service.git
cd mern-auth-service
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

4. Run the server:

```bash
npm start
```

---

## 🔐 API Endpoints

### Register User

POST /api/auth/register

### Login User

POST /api/auth/login

### Protected Route

GET /api/auth/profile
(Requires JWT Token)

---

## 🔑 Authentication Flow

1. User registers → password hashed using bcrypt
2. User logs in → JWT token generated
3. Token sent in headers
4. Middleware verifies token for protected routes

---

## 🚀 Future Improvements

* Role-based access control (Admin/User)
* Refresh tokens
* Email verification
* OAuth login (Google)

---

## 👨‍💻 Author

Anshul Soni
GitHub: https://github.com/Anshul-soni-dev

Anshul Soni
GitHub: https://github.com/Anshul-soni-dev
