import React from "react";
import "./StatusHistory.css";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const employees = [
  { id: "EMP001", name: "Sophia Clark", dept: "Marketing", role: "Marketing Manager" },
  { id: "EMP002", name: "Ethan Bennett", dept: "Sales", role: "Sales Representative" },
  { id: "EMP003", name: "Olivia Carter", dept: "Finance", role: "Financial Analyst" },
  { id: "EMP004", name: "Liam Davis", dept: "HR", role: "HR Specialist" },
  { id: "EMP005", name: "Ava Evans", dept: "IT", role: "IT Support" },
  { id: "EMP006", name: "Noah Foster", dept: "Operations", role: "Operations Coordinator" },
  { id: "EMP007", name: "Isabella Green", dept: "Customer Service", role: "Customer Service Agent" },
  { id: "EMP008", name: "Jackson Hayes", dept: "Product", role: "Product Manager" },
  { id: "EMP009", name: "Mia Ingram", dept: "Legal", role: "Legal Counsel" },
  { id: "EMP010", name: "Lucas Jenkins", dept: "Research", role: "Research Analyst" },
];

const StatusHistory = () => {
    const navigate= useNavigate();
  return (
    <div className="status-page">

      {/* HEADER */}
      <div className="status-header">
        <div>
          <h2>Status & History</h2>
          <p className="breadcrumb">Employee Management / Status & History</p>
        </div>

        <button className="export-btn">Export</button>
      </div>

      {/* WELCOME CARD */}
      <div className="welcome-card">
        <div className="welcome-left">
          <img
            src="https://i.pravatar.cc/60"
            alt="avatar"
            className="avatar"
          />
          <div>
            <h3>Welcome Back, Adrian</h3>
            <p>
              You have <span>21</span> Pending Approvals &{" "}
              <span>14</span> Leave Requests
            </p>
          </div>
        </div>

        <div className="welcome-actions">
          <button className="primary-btn">Add Job Post</button>
          <button className="success-btn">Add Employee</button>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="filter-bar">
        <div className="filters">
          <button className="filter-btn">
            Department <FiChevronDown />
          </button>
          <button className="filter-btn">
            Role <FiChevronDown />
          </button>
          <button className="filter-btn">
            Status <FiChevronDown />
          </button>
        </div>

        <div className="search-box">
          <FiSearch />
          <input placeholder="Search employee by name or ID" />
        </div>
      </div>

      {/* TABLE */}
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Email</th>
              <th>Phone</th>
              <th>History</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.dept}</td>
                <td>{emp.role}</td>
                <td>sophia.clark@example.com</td>
                <td>+91 90555 00123</td>
                <td className="view-link">view</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="pagination">
        <button>{"<"}</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>{">"}</button>
      </div>
    </div>
  );
};

export default StatusHistory;
