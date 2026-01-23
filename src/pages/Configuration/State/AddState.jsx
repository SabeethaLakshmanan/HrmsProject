import { FiX, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./AddState.css";

const AddState = () => {
  const navigate = useNavigate();

  return (
    <div className="add-state-page">
      <div className="add-state-card">
        <div className="add-state-header">
          <h2>Add State</h2>
          <FiX
            className="close-icon"
            onClick={() => navigate("/configuration/state")}
          />
        </div>

        <div className="add-state-divider"></div>

        <div className="form-group">
          <label>State Name</label>
          <input type="text" placeholder="Enter State Name" />
        </div>

        <div className="form-group">
          <label>Country</label>
          <select>
            <option>Select Country</option>
          </select>
        </div>

        <div className="form-actions">
          <button
            className="btn-cancel"
            onClick={() => navigate("/configuration/state")}
          >
            Cancel
          </button>

          <button className="btn-primary">
            <FiPlus /> Create State
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddState;
