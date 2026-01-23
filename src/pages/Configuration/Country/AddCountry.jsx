import { FiX, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./AddCountry.css";

const AddCountry = () => {
  const navigate = useNavigate();

  return (
    <div className="add-country-page">
      <div className="add-country-card">
        {/* HEADER */}
        <div className="add-country-header">
          <h2>Add Country</h2>
          <FiX
            className="close-icon"
            onClick={() => navigate("/configuration/country")}
          />
        </div>
   
<div className="add-country-divider"></div>


        {/* FORM */}
        <div className="form-group">
          <label>Country Name</label>
          <input type="text" placeholder="Enter Country Name" />
        </div>

        <div className="form-group">
          <label>Country Code</label>
          <input type="text" placeholder="Enter Country Code" />
        </div>

        {/* FOOTER */}
        <div className="form-actions">
          <button
            className="btn-cancel"
            onClick={() => navigate("/configuration/country")}
          >
            Cancel
          </button>

          <button
  className="btn-primary"
  onClick={() => navigate("/configuration/state")}
>
  <FiPlus size={16} />
  Create Country
</button>
        </div>
      </div>
    </div>
  );
};

export default AddCountry;
