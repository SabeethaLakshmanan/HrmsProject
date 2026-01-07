import { useEffect, useMemo, useState } from "react";
import "./EmployeeList.css";
import {
  fetchEmployeeList,
  fetchDepartments,
  fetchRoles,
  fetchStatuses,
} from "./EmployeeListServices";

import { FiHome } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi";
import plusIcon from "../../../assets/image/EmployeeList/plusIcon.svg";
import exportIcon from "../../../assets/image/EmployeeList/exportIcon.svg";

import {
  FiEye,
  FiEdit,
  FiTrash2,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";
import Dropdown from "../../../components/Dropdown/Dropdown";

const ROWS_PER_PAGE = 10;

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [DepartmentFilter, setDepartmentFilter] = useState("");
  const [RoleFilter, setRoleFilter] = useState("");
  const [StatusFilter, setStatusFilter] = useState("");
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [roleOptions, setRoleOptions] = useState([]);
  const [statusOptions, setStatusOptions] = useState([]);

  useEffect(() => {
    fetchEmployeeList().then(setEmployees);
    fetchDepartments().then(setDepartmentOptions);
    fetchRoles().then(setRoleOptions);
    fetchStatuses().then(setStatusOptions);
  }, []);

  const [isCompact, setIsCompact] = useState(false);

useEffect(() => {
  const handleResize = () => {
    setIsCompact(window.innerWidth <= 991); // tablet + mobile
  };

  handleResize(); // initial
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  const filteredEmployees = useMemo(() => {
    return employees.filter(
      (e) =>
        e.name.toLowerCase().includes(search.toLowerCase()) ||
        e.employeeId.toLowerCase().includes(search.toLowerCase())
    );
  }, [employees, search]);

  const totalPages = Math.ceil(filteredEmployees.length / ROWS_PER_PAGE);

  const pagedData = useMemo(() => {
    const start = (currentPage - 1) * ROWS_PER_PAGE;
    return filteredEmployees.slice(start, start + ROWS_PER_PAGE);
  }, [filteredEmployees, currentPage]);

  return (
    <div className="container-fluid employee-list-page">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h5 className="employee-title">Employee List</h5>
          <div className="employee-breadcrumb">
            <FiHome className="employee-breadcrumb-icon" />

            <span className="employee-breadcrumb-separator">/</span>
            <span>Employee Management</span>
            <span className="employee-breadcrumb-separator">/</span>
            <span className="employee-breadcrumb-current">Employee List</span>
          </div>
        </div>

        <div className="d-flex gap-2 add-employee-buttons">
          <button className="btn btn-primary btn-sm add-job-btn">
            <span className="add-job-icon">
              <img src={plusIcon} alt="plus" />
            </span>
            <span>Add Job Post</span>
          </button>

          <button className="btn btn-primary btn-sm add-employee-btn">
            <span className="add-job-icon">
              <img src={plusIcon} alt="plus" />
            </span>
            <span>Add Employee</span>
          </button>
          <button className="btn btn-outline-secondary btn-sm emp-export-btn">
            <img src={exportIcon} alt="export" className="export-left-icon" />
            <span>Export</span>
            <HiChevronDown className="export-right-icon" />
          </button>
        </div>
      </div>
      <div className="employee-list-container">
        {/* Filters */}
        <div className="card mb-2 filter-card">
          <div className="card-body d-flex flex-wrap gap-2 align-items-center">
            <Dropdown
              id="Department-filter"
              placeholder="Department"
              options={departmentOptions}
              value={DepartmentFilter}
              onChange={setDepartmentFilter}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />
            <Dropdown
              id="Role-filter"
              placeholder="Role"
              options={roleOptions}
              value={RoleFilter}
              onChange={setRoleFilter}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />
            <Dropdown
              id="Status-filter"
              placeholder="Status"
              options={statusOptions}
              value={StatusFilter}
              onChange={setStatusFilter}
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
            />

            <button className="btn btn-primary btn-sm emp-search-btn">
              <FiSearch className="emp-search-icon" />
              <span>Search</span>
            </button>

            <button className="btn btn-outline-secondary btn-sm emp-clear-btn">
              Clear
            </button>

            <div className="ms-auto">
<input
  className="form-control form-control-sm emp-search-input"
  placeholder={
    isCompact ? "Search" : "Search Employee by name or ID"
  }
  value={search}
  onChange={(e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  }}
/>

            </div>
          </div>
        </div>

        {/* Table */}
        <div className="employee-table-wrapper">
          <table className="table employee-table mb-0">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th>Role</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pagedData.map((emp) => (
                <tr key={emp.id}>
                  <td>
                    <div className="employee-name">
                      <div>
                        <div className="small">{emp.employeeId}</div>
                      </div>
                    </div>
                  </td>
                  <td>{emp.name}</td>
                  <td>{emp.designation}</td>
                  <td>{emp.department}</td>
                  <td>{emp.role}</td>
                  <td>{emp.email}</td>
                  <td>{emp.phone}</td>
                  <td>
                    <span
                      className={`status-badge ${
                        emp.status === "Active"
                          ? "status-active"
                          : "status-inactive"
                      }`}
                    >
                      {emp.status}
                    </span>
                  </td>
                  <td className="text-center">
                    <div className="action-icons">
                      <FiEye />
                      <FiEdit />
                      <FiTrash2 />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="employee-pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
          >
            <FiChevronsLeft className="pagination-arrow" />
          </button>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            <FiChevronLeft className="pagination-arrow" />
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            <FiChevronRight className="pagination-arrow" />
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(totalPages)}
          >
            <FiChevronsRight className="pagination-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
