const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create homepage UI in Figma",
        taskDate: "2026-05-15",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve responsive navbar issue",
        taskDate: "2026-05-10",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Discuss project requirements",
        taskDate: "2026-05-16",
        category: "Meeting"
      }
    ]
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Logo",
        taskDescription: "Design logo concepts for brand",
        taskDate: "2026-05-18",
        category: "Branding"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Portfolio",
        taskDescription: "Add recent projects to portfolio",
        taskDate: "2026-05-11",
        category: "Portfolio"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Bug Testing",
        taskDescription: "Test signup form bugs",
        taskDate: "2026-05-12",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Social Media Post",
        taskDescription: "Design Instagram post",
        taskDate: "2026-05-19",
        category: "Social Media"
      }
    ]
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Landing Page",
        taskDescription: "Develop landing page in React",
        taskDate: "2026-05-20",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Configure MongoDB database",
        taskDate: "2026-05-09",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Connect frontend with API",
        taskDate: "2026-05-13",
        category: "API"
      }
    ]
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Dashboard UI",
        taskDescription: "Design admin dashboard",
        taskDate: "2026-05-21",
        category: "UI/UX"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Wireframing",
        taskDescription: "Prepare app wireframes",
        taskDate: "2026-05-17",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Typography Selection",
        taskDescription: "Choose fonts for website",
        taskDate: "2026-05-08",
        category: "Branding"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Prototype Testing",
        taskDescription: "Test interactive prototype",
        taskDate: "2026-05-14",
        category: "Testing"
      }
    ]
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "SEO Optimization",
        taskDescription: "Improve website SEO",
        taskDate: "2026-05-22",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Content Writing",
        taskDescription: "Write landing page content",
        taskDate: "2026-05-07",
        category: "Content"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Ad Campaign",
        taskDescription: "Prepare Facebook ad campaign",
        taskDate: "2026-05-23",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Analytics Report",
        taskDescription: "Generate traffic report",
        taskDate: "2026-05-13",
        category: "Analytics"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Email Template",
        taskDescription: "Design promotional email template",
        taskDate: "2026-05-24",
        category: "Email Marketing"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalstorage = ()=>{

    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}


export const getLocalstorage = ()=>{
    const employees = JSON.parse( localStorage.getItem("employees"))
    const admin = JSON.parse( localStorage.getItem("admin"))
  

}