# Employee Management System (EMS)

A modern, responsive web application for managing employees and their tasks. Built with React and Vite for fast development and optimized performance.

## 📋 Features

- **User Authentication** - Secure login system with role-based access control
  - Role-based dashboard routing (Admin vs Employee)
  - Session persistence with local storage
  
- **Admin Dashboard** - Comprehensive management interface for administrators
  - View all employees and their task assignments
  - Create and assign new tasks to employees
  - Monitor task completion and status updates
  - Real-time visibility into system-wide task statistics
  
- **Employee Dashboard** - Personalized view for employees to manage their tasks
  - View assigned tasks with detailed information
  - Accept or reject task assignments
  - Mark tasks as complete or failed
  - Track personal task statistics
  
- **Task Management** - Comprehensive task lifecycle management
  - **New Tasks** - Tasks awaiting employee action
  - **Accepted Tasks** - Tasks currently in progress
  - **Completed Tasks** - Successfully finished tasks
  - **Failed Tasks** - Tasks marked as unsuccessful
  - Task statistics summary for quick overview
  
- **State Management** - Context API-based architecture
  - Centralized authentication state management
  - Real-time task state synchronization
  - Seamless data flow across components
  
- **Data Persistence** - Reliable local storage implementation
  - Automatic data backup to browser local storage
  - Session persistence across page refreshes
  - User and task data preservation
  
- **Responsive Design** - Mobile-friendly interface
  - Optimized layouts for all device sizes
  - Touch-friendly interactions
  - Seamless experience on desktop and mobile

## 🏗️ Project Structure

```
ems/
├── public/                        # Static assets served publicly
├── src/
│   ├── assets/                    # Images, fonts, and other media
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.jsx          # Login page component
│   │   │   ├── Dashboard/
│   │   │   │   ├── AdminDashboard.jsx      # Admin management interface
│   │   │   │   └── EmployeeDashboard.jsx  # Employee task dashboard
│   │   │   └── Others/
│   │   │       ├── Header.jsx             # Navigation header component
│   │   │       ├── TaskListNumbers.jsx    # Task statistics display
│   │   │       ├── AllTasks.jsx           # Complete task listing
│   │   │       └── Createtask.jsx         # Task creation form
│   │   └── Tasklist/
│   │       ├── Tasklist.jsx       # Main task list container
│   │       ├── NewTask.jsx        # New tasks view
│   │       ├── AcceptTask.jsx     # Accepted tasks view
│   │       ├── Completetask.jsx   # Completed tasks view
│   │       └── FailedTask.jsx     # Failed tasks view
│   ├── context/
│   │   ├── Authcontext.jsx        # Authentication state management
│   │   └── Taskcontext.jsx        # Task state management
│   ├── pages/                     # Page-level components
│   ├── utils/
│   │   └── Localstorage.jsx       # Local storage helper functions
│   ├── App.jsx                    # Root application component
│   ├── main.jsx                   # Application entry point
│   ├── App.css                    # Global application styles
│   └── index.css                  # Base styling and resets
├── index.html                     # HTML entry point
├── package.json                   # Project dependencies and scripts
├── vite.config.js                 # Vite configuration
├── eslint.config.js               # ESLint rules and configuration
└── README.md                      # This file
```

## 🛠️ Tech Stack

- **React** - UI library for building interactive components
- **Vite** - Next-generation frontend build tool for fast development
- **Context API** - State management for authentication and tasks
- **CSS** - Styling for responsive design
- **ESLint** - Code quality and consistency

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Setup Steps

1. **Clone the repository:**
```bash
git clone <repository-url>
cd ems
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure local storage data** (Optional):
   - The application uses browser local storage for data persistence
   - Initial data will be created on first login
   - Check `src/utils/Localstorage.jsx` for storage configuration

4. **Verify the installation:**
```bash
npm run lint
```
This ensures all code meets the quality standards.

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
