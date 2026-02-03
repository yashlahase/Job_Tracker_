# 📊 Job Tracker

> A modern, full-stack web application designed to streamline your job search journey. Track applications, visualize progress, and stay organized throughout your career hunt.

[![MIT License](https://img.shields.io/badge/License-ISC-green.svg)](https://choosealicense.com/licenses/isc/)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen.svg)](https://www.mongodb.com/)

---

## 📖 Overview

**Job Tracker** is a comprehensive full-stack solution built for job seekers who want to maintain control over their application pipeline. With an intuitive dashboard, powerful analytics, and seamless CRUD operations, managing your job applications has never been easier.

Whether you're a fresh graduate, career switcher, or seasoned professional, this app helps you stay organized and make data-driven decisions about your job search strategy.

---

## ✨ Features

- 🔐 **Secure Authentication** – JWT-based user authentication with password encryption
- 📝 **Job Management** – Create, read, update, and delete job applications effortlessly
- 📊 **Dashboard Analytics** – Visualize job application statistics with interactive charts
- 🔍 **Advanced Search & Filter** – Sort and filter jobs by status, company, position, and more
- 🎨 **Modern UI/UX** – Clean, responsive interface built with Tailwind CSS
- 🔄 **Real-time Sync** – Instant updates between frontend and backend
- 📱 **Mobile Responsive** – Works seamlessly across all device sizes
- 🎯 **Status Tracking** – Monitor applications through pending, interview, declined, and offer stages

---

## 🛠️ Tech Stack

### **Frontend**
- **React** 18.2.0 – UI library for building interactive interfaces
- **Vite** – Lightning-fast build tool and dev server
- **Tailwind CSS** – Utility-first CSS framework
- **React Router DOM** v6 – Client-side routing
- **Axios** – Promise-based HTTP client
- **Context API** – State management solution

### **Backend**
- **Node.js** – JavaScript runtime environment
- **Express.js** – Minimal and flexible web framework
- **MongoDB** – NoSQL database for scalable data storage
- **Mongoose** – Elegant MongoDB object modeling
- **JWT** – Secure token-based authentication
- **bcryptjs** – Password hashing library
- **CORS** – Cross-Origin Resource Sharing enabled

### **DevOps & Tools**
- **Git** – Version control
- **Vercel** – Frontend deployment platform
- **Render/Railway** – Backend hosting
- **MongoDB Atlas** – Cloud database service

---

## 📁 Folder Structure

```
Job_Tracker/
│
├── frontend/                  # React frontend application
│   ├── src/
│   │   ├── api/              # API service layer (Axios config)
│   │   ├── components/       # Reusable UI components
│   │   ├── context/          # React Context providers
│   │   ├── pages/            # Route-based page components
│   │   ├── App.jsx           # Main application component
│   │   ├── main.jsx          # Application entry point
│   │   └── index.css         # Global styles & Tailwind imports
│   ├── public/               # Static assets
│   ├── package.json          # Frontend dependencies
│   ├── vite.config.js        # Vite configuration
│   ├── tailwind.config.js    # Tailwind CSS configuration
│   └── postcss.config.js     # PostCSS configuration
│
├── backend/                   # Express backend server
│   ├── config/               # Database connection config
│   ├── controllers/          # Route controllers & business logic
│   ├── models/               # Mongoose schemas & models
│   ├── routes/               # API route definitions
│   ├── middleware/           # Custom middleware (auth, etc.)
│   ├── index.js              # Server entry point
│   └── package.json          # Backend dependencies
│
├── .gitignore                # Git ignore rules
└── README.md                 # Project documentation
```

---

## 🚀 Installation & Setup

### **Prerequisites**

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account
- [Git](https://git-scm.com/)

---

### **Step 1: Clone the Repository**

```bash
git clone <your-github-repo-url>
cd Job_Tracker
```

---

### **Step 2: Backend Setup**

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
PORT=5006
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
FRONTEND_URL=http://localhost:5173
```

> **Note:** Replace `your_mongodb_connection_string` with your actual MongoDB URI (local or Atlas).

---

### **Step 3: Frontend Setup**

Navigate to the frontend directory and install dependencies:

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend` directory:

```env
VITE_API_URL=http://localhost:5006/api
```

---

### **Step 4: Run the Application**

#### **Start Backend Server**

```bash
cd backend
npm run dev
```


#### **Start Frontend Development Server**

```bash
cd frontend
npm run dev
```


---

## 🌐 Environment Variables

### **Backend (.env)**

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Backend server port | `5006` |
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/jobtracker` |
| `JWT_SECRET` | Secret key for JWT signing | `mySecretKey123!` |
| `FRONTEND_URL` | Frontend URL for CORS | `http://localhost:5173` |

### **Frontend (.env)**

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API base URL | `http://localhost:5006/api` |

---

## 📖 Usage Instructions

### **1. Register/Login**
- Create a new account with your email and password
- Login to access your personalized dashboard

### **2. Add New Job Application**
- Click "Add Job" button
- Fill in company name, position, location, status, and type
- Submit to save the application

### **3. Manage Applications**
- **Edit**: Update job details as your application progresses
- **Delete**: Remove applications you no longer want to track
- **View**: See detailed information for each job

### **4. Use Dashboard Features**
- **Search**: Find jobs by company or position name
- **Filter**: Filter by status (pending, interview, declined, offer)
- **Sort**: Sort by date, company, or status
- **Analytics**: View statistics and charts of your applications

---

## 🔑 API Endpoints

### **Authentication**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |

### **Jobs**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/jobs` | Get all jobs for logged-in user |
| GET | `/api/jobs/:id` | Get specific job by ID |
| POST | `/api/jobs` | Create new job application |
| PATCH | `/api/jobs/:id` | Update existing job |
| DELETE | `/api/jobs/:id` | Delete job application |
| GET | `/api/jobs/stats` | Get job statistics & analytics |

---


## 🚢 Deployment

### **Frontend - Vercel**

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/) and import your repository
3. Set **Root Directory** to `frontend`
4. Add environment variable: `VITE_API_URL=<your-backend-url>/api`
5. Click **Deploy**

### **Backend - Render**

1. Create a new **Web Service** on [Render](https://render.com/)
2. Connect your GitHub repository
3. Set **Root Directory** to `backend`
4. Add environment variables (MONGO_URI, JWT_SECRET, etc.)
5. Set **Build Command**: `npm install`
6. Set **Start Command**: `npm start`
7. Deploy

### **Database - MongoDB Atlas**

1. Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Add your deployment IP to the IP whitelist (or allow all for development)
3. Create a database user
4. Get your connection string and update `MONGO_URI` in backend `.env`


---
