// EmployeeList.services.js

const mockEmployees = Array.from({ length: 47 }, (_, i) => ({
  id: i + 1,
  employeeId: `EMP-${1000 + i}`,
  name: `Employee ${i + 1}`,
  designation: i % 2 === 0 ? "Software Engineer" : "UI Designer",
  department: i % 3 === 0 ? "Engineering" : "Design",
  role: i % 2 === 0 ? "Developer" : "Designer",
  email: `employee${i + 1}@company.com`,
  phone: `+91 98765${String(10000 + i).slice(-5)}`,
  status: i % 4 === 0 ? "Inactive" : "Active",
}));

const mockDepartments = [
  { id: 1, name: "Engineering" },
  { id: 2, name: "Design" },
  { id: 3, name: "Human Resources" },
];

const mockRoles = [
  { id: 1, name: "Developer" },
  { id: 2, name: "Designer" },
  { id: 3, name: "Manager" },
];

const mockStatuses = [
  { id: 1, name: "Active" },
  { id: 2, name: "Inactive" },
];

export const fetchEmployeeList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockEmployees);
    }, 300);
  });
};

export const fetchDepartments = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockDepartments);
    }, 200);
  });
};

export const fetchRoles = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockRoles);
    }, 200);
  });
};

export const fetchStatuses = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockStatuses);
    }, 200);
  });
};
