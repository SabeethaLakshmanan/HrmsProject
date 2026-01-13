import React from "react";
import "./EmployeeDocuments.css";
import { FiUpload, FiEye, FiDownload, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import exportIcon from "../../../assets/image/EmployeeList/exportIcon.svg"; 
import breadcrumbIcon from "../../../assets/image/EmployeeList/breadcrumbIcon.png";

const documents = [
  { name: "Passport.pdf", date: "2023-10-26", status: "Verified" },
  { name: "Passport.pdf", date: "2023-10-26", status: "Verified" },
  { name: "Passport.pdf", date: "2023-10-26", status: "Pending" },
  { name: "Passport.pdf", date: "2023-10-26", status: "Pending" },
  { name: "Passport.pdf", date: "2023-10-26", status: "Verified" },
];

export default function EmployeeDocuments() {
    const navigate= useNavigate();
  return (
    <div className="documents-page">

      {/* HEADER */}
      <div className="documents-header">
        <div>
          <h2>Employee Documents</h2>
           <div className="breadcrumb">
            <img src={breadcrumbIcon} alt="" />
            <span className="sep">/</span>
            <span>Employee Management</span>
            <span className="sep">/</span>
            <span className="active">Edit Employee</span>
          </div>
          </div>

        <button className="export-btn">
            <img src={exportIcon} alt="export" />
          Export
        </button>
      </div>

      {/* UPLOAD AREA */}
      <div className="upload-area">
        <p className="upload-title">
          Drag & Drop Files here or Click to upload
        </p>
        <p className="upload-sub">
          PDF, JPG, PNG Accepted. Max file size 10MB
        </p>

        <button className="upload-btn">
          <FiUpload size={16} />
          Upload
        </button>
      </div>

      {/* CONTENT */}
      <div className="documents-content">

        {/* TABLE */}
        <div className="documents-table-card">
          <h3>Upload Documents</h3>

          <table>
            <thead>
              <tr>
                <th>Document Name</th>
                <th>Uploaded Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {documents.map((doc, i) => (
                <tr key={i}>
                  <td>{doc.name}</td>
                  <td>{doc.date}</td>
                  <td>
                    <span
                      className={`status ${
                        doc.status === "Verified"
                          ? "verified"
                          : "pending"
                      }`}
                    >
                      {doc.status}
                    </span>
                  </td>
                  <td className="actions">
                    <FiEye />
                    <FiDownload />
                    <FiTrash2 />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* REQUIRED DOCS */}
        <div className="required-docs-card">
          <h3>Required Documents</h3>

          <ul>
            <li>
              ID Proof <span className="completed">Completed</span>
            </li>
            <li>
              Address Proof <span className="completed">Completed</span>
            </li>
            <li>
              Experience Certificate <span className="pending">Pending</span>
            </li>
            <li>
              Educational Certificate <span className="pending">Pending</span>
            </li>
            <li>
              Educational Certificate <span className="completed">Completed</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
