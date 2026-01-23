import { FiPlus, FiEdit2, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./State.css";

const StateList = () => {
  const navigate = useNavigate();

  return (
    <div className="state-page">
      {/* HEADER */}
      <div className="state-header">
        <div>
          <h2>State</h2>
          <div className="breadcrumb">
            Configuration / <span>State</span>
          
        </div>
        </div>

        <button
          className="add-btn"
          onClick={() => navigate("/configuration/state/add")}
        >
          <FiPlus /> Add State
        </button>
      </div>

      {/* FILTER */}
      <div className="state-filter">
        <select>
          <option>Select Country</option>
          <option>United States</option>
          <option>Canada</option>
        </select>

        <input type="text" placeholder="Search" />
      </div>

      {/* TABLE */}
      <div className="state-card">
        <table className="state-table">
          <thead>
            <tr>
              <th>State Name</th>
              <th>Country Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>California</td>
              <td className="link">United States</td>
              <td>
                <span className="status active">Active</span>
              </td>
              <td className="actions">
                <FiEdit2 />
                <FiTrash2 />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StateList;
