# Clean Architecture with TypeScript & Express 🧱

A simple backend project demonstrating **Clean Architecture** principles using **TypeScript**, **Node.js**, and **Express.js**.

This project is structured to clearly separate:

- 🧠 Business Logic
- 📦 Domain Entities
- 🛠️ Infrastructure Layer
- 🌐 Interface Layer
- 📄 Use Cases
- 🔌 Dependency Injection

Perfect for learning scalable backend architecture patterns.

----

# 🚀 Features

- Clean Architecture Folder Structure
- TypeScript Support
- Express.js REST API
- In-Memory Repository
- Entity Validation
- Use Case Driven Development
- Dependency Injection
- Scalable & Maintainable Codebase

---

# 🧰 Tech Stack

- TypeScript
- Node.js
- Express.js
- ts-node-dev

---

# 📁 Project Structure

```bash
src/
│
├── application/
│   ├── interfaces/
│   └── use-cases/
│
├── domain/
│   └── entities/
│
├── infrastructure/
│   └── repositories/
│
├── interfaces/
│   ├── controllers/
│   └── routes/
│
├── utils/
│
└── main.ts
```

---

# 🏗️ Clean Architecture Layers

## 1️⃣ Domain Layer

Contains enterprise business rules and entities.

Example:

- `User Entity`

Responsibilities:

- Core business validation
- Domain models
- Business rules

---

## 2️⃣ Application Layer

Contains application-specific business rules.

Example:

- `CreateUserUseCase`

Responsibilities:

- Execute use cases
- Coordinate data flow
- Interact with repositories

---

## 3️⃣ Infrastructure Layer

Handles external implementations.

Example:

- `InMemoryUserRepository`

Responsibilities:

- Database access
- External services
- Third-party integrations

---

## 4️⃣ Interface Layer

Handles HTTP requests and responses.

Example:

- `UserController`
- `User Routes`

Responsibilities:

- API Endpoints
- Request Validation
- Response Formatting

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/clean-architecture.git
cd clean-architecture
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Run Development Server

```bash
npm run dev
```

---

# 🚀 API Endpoints

## Create User

### POST `/users/create`

### Request Body

```json
{
  "name": "Alameen",
  "email": "alameen@gmail.com",
  "password": "123456",
  "phone": "9876543210"
}
```

### Success Response

```json
{
  "success": true,
  "message": "User created Successfully",
  "user": {
    "id": "generated-id",
    "name": "Alameen"
  }
}
```

---

# 🧠 Entity Validation

The `User` entity includes built-in validation for:

- Valid Email
- Password Length
- Phone Number Length

Example:

```ts
if (!email.includes("@")) {
  throw new Error("Invalid email");
}
```

---

# 🔄 Dependency Injection

Dependencies are injected manually for better flexibility and testing.

Example:

```ts
const userRepo = new InMemoryUserRepository();
const userUseCase = new CreateUserUseCase(userRepo);
const userController = new UserController(userUseCase);
```

---

# 📦 Example Flow

```text
Route → Controller → UseCase → Repository → Entity
```

---

# 🧪 Future Improvements

- MongoDB Integration
- JWT Authentication
- Repository Pattern with Database
- Validation Middleware
- Unit Testing
- Docker Support
- Environment Variables
- Swagger Documentation

---

# 📚 Learning Purpose

This project is ideal for developers who want to understand:

- Clean Architecture
- SOLID Principles
- Dependency Injection
- Scalable Backend Design
- TypeScript Backend Development

---

# 🤝 Contributing

Contributions are welcome!

```bash
Fork the repository
Create your feature branch
Commit your changes
Push to the branch
Create a Pull Request
```

---

# 📜 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

Developed by **Alameen**

If you found this helpful, give the repository a ⭐ on GitHub!
