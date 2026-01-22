import React, { useState } from "react";
import "./BusinessUnits.css";
import breadcrumbIcon from "../../../assets/image/EmployeeList/breadcrumbIcon.png";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const BusinessUnits = () => {
   const navigate = useNavigate();
  const units = [
    { id: "002209", name: "UNIT-2" },
    { id: "002210", name: "UNIT-3" },
    { id: "002211", name: "UNIT-4" },
    { id: "002212", name: "UNIT-5" },
    { id: "002213", name: "UNIT-6" },
    { id: "002214", name: "UNIT-7" },
    { id: "002215", name: "UNIT-8" },
    { id: "002216", name: "UNIT-9" },
    { id: "002217", name: "UNIT-10" },
    { id: "002218", name: "UNIT-11" },
  ];

  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(units.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentUnits = units.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="business-units-page">
      {/* Header */}
      <div className="page-header">
        <h1 className="page-title">Business Units</h1>

        <div className="breadcrumb">
          <img src={breadcrumbIcon} alt="breadcrumb" />
          <span className="separator">/</span>
          <span>Configuration</span>
          <span className="separator">/</span>
          <span className="active">Business Units</span>
        </div>
      </div>

      {/* Table */}
      <div className="table-card">
        <table className="units-table">
          <thead>
            <tr>
              <th>Unit ID</th>
              <th>Unit</th>
              <th className="actions-header">Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentUnits.map((unit) => (
              <tr key={unit.id}>
                <td>{unit.id}</td>
                <td>{unit.name}</td>
                <td>
                  <div className="actions">
                    <FiEdit
  className="edit-icon"
  onClick={() =>
    navigate(`/configuration/business-units/edit/${unit.id}`)
  }
/>
                    <FiTrash2 className="delete-icon" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
          >
            &laquo;
          </button>

          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            &lsaquo;
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={currentPage === i + 1 ? "active-page" : ""}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            &rsaquo;
          </button>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(totalPages)}
          >
            &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessUnits;
