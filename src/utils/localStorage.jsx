// localStorage.clear();

const employees = [
  {
    id: 1,
    firstName: "John",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Monthly Report",
        description: "Compile and review the monthly report for submission.",
        date: "2024-11-15",
        category: "Reporting",
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team Meeting",
        description: "Attend the weekly team alignment meeting.",
        date: "2024-11-10",
        category: "Meeting",
      },
    ],
    taskCount: {
      active: 1, // Count of tasks that are active
      newTask: 1, // Count of tasks that are new
      completed: 1, // Count of tasks that are completed
      failed: 0, // Count of tasks that are failed
    },
  },
  {
    id: 2,
    firstName: "Jane",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Client Follow-Up",
        description: "Reach out to clients for feedback on recent projects.",
        date: "2024-11-16",
        category: "Client Relations",
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Product Testing",
        description: "Test new features of the upcoming product release.",
        date: "2024-11-09",
        category: "Testing",
      },
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    firstName: "Alice",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        title: "Code Review",
        description: "Review code submissions from the development team.",
        date: "2024-11-12",
        category: "Development",
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Documentation Update",
        description: "Update technical documentation with recent changes.",
        date: "2024-11-08",
        category: "Documentation",
      },
    ],
    taskCount: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 4,
    firstName: "Bob",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Research Market Trends",
        description: "Analyze current market trends in the industry.",
        date: "2024-11-18",
        category: "Research",
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Project Kick-Off",
        description: "Initiate the kick-off meeting for the new project.",
        date: "2024-11-06",
        category: "Project Management",
      },
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 5,
    firstName: "Charlie",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Review",
        description: "Review design submissions for the current sprint.",
        date: "2024-11-14",
        category: "Design",
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Budget Analysis",
        description: "Analyze budget spend and prepare recommendations.",
        date: "2024-11-04",
        category: "Finance",
      },
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const empData = JSON.parse(localStorage.getItem("employees"));
  const adminData = JSON.parse(localStorage.getItem("admin"));
  //   console.log(JSON.parse(empData, adminData));
  //   console.log(empData, adminData);
  return { empData, adminData };
};
