import { FiSearch } from "react-icons/fi";
import React, { useState } from "react";
import "./PunchInOutList.css";
import { useNavigate } from "react-router-dom";
import breadcrumbIcon from "../../assets/image/EmployeeList/breadcrumbIcon.png";
import exportIcon from "../../assets/image/EmployeeList/exportIcon.svg"; 

const PunchInOutList = () => {
    const navigate = useNavigate();  
    
  return (
    <div className="punch-container">
      {/* Header */}
      <div className="punch-header">
        <div>
          <h2>Punch In-Out List</h2>
          <p className="breadcrumb">
           <img src={breadcrumbIcon} alt="breadcrumb" />
             <span className="separator">/</span>
            <span>Attendance Management</span>
            <span className="separator">/</span>
            <span className="active">Punch In-Out List</span>
          </p>
        </div>

        <button className="export-btn">
            <img src={exportIcon} alt="export" />
            Export 
        </button>
      </div>

      {/* Filters */}
      <div className="filter-row">
        <select><option>Department</option></select>
        <select><option>Role</option></select>
        <select><option>Status</option></select>
        <select><option>Date</option></select>

        <div className="search-box">
          <FiSearch />
          <input placeholder="Search employee by name or ID" />
        </div>
      </div>

      {/* Table */}
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Shift</th>
              <th>Punch In Time</th>
              <th>Punch Out Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.department}</td>
                <td>{item.designation}</td>
                <td>{item.shift}</td>
                <td>{item.in}</td>
                <td>{item.out}</td>
                <td>
                  <span className="status present">Present</span>
                </td>
                <td className="actions">
                  View | Edit | Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="table-footer"></div>
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

export default PunchInOutList;

/* Dummy data */
const data = [
  { id: "EMP001", name: "Sophia Clark", department: "Marketing", designation: "Marketing Manager", shift: "Morning Shift", in: "9.30 AM", out: "7.00 PM" },
  { id: "EMP002", name: "Ethan Bennett", department: "Sales", designation: "Sales Representative", shift: "Morning Shift", in: "9.30 AM", out: "7.00 PM" },
  { id: "EMP003", name: "Olivia Carter", department: "Finance", designation: "Financial Analyst", shift: "Morning Shift", in: "9.30 AM", out: "7.00 PM" },
  { id: "EMP004", name: "Liam Davis", department: "HR", designation: "HR Specialist", shift: "Morning Shift", in: "9.30 AM", out: "7.00 PM" },
  { id: "EMP005", name: "Ava Evans", department: "IT", designation: "IT Support", shift: "Morning Shift", in: "9.30 AM", out: "7.00 PM" },
];
