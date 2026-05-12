# Employee Management System (EMS)

A modern, responsive web application for managing employees and their tasks. Built with React and Vite for fast development and optimized performance.

## 📋 Features

- **User Authentication** - Secure login system with role-based access
- **Admin Dashboard** - Centralized management interface for administrators
- **Employee Dashboard** - Personalized view for employees to manage their tasks
- **Task Management** - Create, assign, and track tasks with multiple statuses
  - New Tasks
  - Accepted Tasks
  - Completed Tasks
  - Failed Tasks
- **Real-time Updates** - Context-based state management for seamless data flow
- **Local Storage** - Persistent data storage for tasks and user information
- **Responsive Design** - Works seamlessly on desktop and mobile devices

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Auth/
│   │   ├── Login.jsx              # Login page component
│   │   └── Dashboard/
│   │       ├── AdminDashboard.jsx # Admin interface
│   │       └── EmployeeDashboard.jsx # Employee interface
│   ├── Others/
│   │   ├── Header.jsx             # Navigation header
│   │   └── TaskListNumbers.jsx    # Task statistics display
│   └── Tasklist/
│       ├── AcceptTask.jsx         # Accepted tasks view
│       ├── CompleteTask.jsx       # Completed tasks view
│       ├── FailedTask.jsx         # Failed tasks view
│       └── NewTask.jsx            # New tasks view
├── context/
│   ├── AuthContext.jsx            # Authentication state management
│   └── TaskContext.jsx            # Task state management
├── utils/
│   └── LocalStorage.jsx           # Local storage utilities
├── App.jsx                        # Main application component
└── main.jsx                       # Application entry point
```

## 🛠️ Tech Stack

- **React** - UI library for building interactive components
- **Vite** - Next-generation frontend build tool for fast development
- **Context API** - State management for authentication and tasks
- **CSS** - Styling for responsive design
- **ESLint** - Code quality and consistency

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ems
```

2. Install dependencies:
```bash
npm install
```

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```
The application will start at `http://localhost:5173` with hot module replacement (HMR).

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 💡 Usage

1. **Login** - Start by logging in with your credentials on the Login page
2. **Admin Access** - Admins can access the Admin Dashboard to manage all employees and tasks
3. **Employee Access** - Employees can view their assigned tasks and update task status
4. **Task Management** - Tasks can be created, accepted, completed, or marked as failed
5. **Data Persistence** - All changes are automatically saved to local storage

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint to check code quality

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the MIT License.
