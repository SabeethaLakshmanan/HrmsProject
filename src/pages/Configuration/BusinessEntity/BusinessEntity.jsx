import React, { useState } from "react";
import "./BusinessEntity.css";
import { useNavigate } from "react-router-dom";
import breadcrumbIcon from "../../../assets/image/EmployeeList/breadcrumbIcon.png";
import LogoHere from "../../../assets/image/LogoHere.png";


const BusinessEntity = () => {
    const navigate=useNavigate();
  const [logo, setLogo] = useState(null);

  const handleLogoUpload = (e) => {
    setLogo(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="business-entity-page">
      {/* Header */}
      <div className="page-header">
        <h1 className="page-title">Business Entity</h1>

          <div className="breadcrumb">
            <img src={breadcrumbIcon} alt="breadcrumb" />
            <span className="separator">/</span>
            <span>Configuration</span>
            <span className="separator">/</span>
            <span className="active">Business Entity</span>
          </div>
        </div>

      {/* Form Card */}
      <div className="entity-card">
        <div className="form-grid">
          {/* LEFT COLUMN */}
          <div className="form-col">
            <label>Name <span>*</span></label>
            <input placeholder="Enter full name" />

            <label>Email ID <span>*</span></label>
            <input placeholder="Enter your Email Id" />

            <label>Mobile No. <span>*</span></label>
            <input placeholder="Enter your mobile no." />

            <label>Telephone No.</label>
            <input placeholder="Enter telephone no." />

            <label>Address 2 <span>*</span></label>
            <input placeholder="Enter your address" />

            <label>Pin Code <span>*</span></label>
            <input placeholder="Enter Pin Code" />

            <label>State <span>*</span></label>
            <input placeholder="Enter your state" />

            <label>GST No</label>
            <input placeholder="Enter your GST No" />
          </div>

          {/* RIGHT COLUMN */}
          <div className="form-col">
            <label>Logo <span>*</span></label>
            <div className="logo-box">
             {logo ? (
  <img src={logo} alt="logo" className="uploaded-logo" />
) : (
  <img src={LogoHere} alt="Logo placeholder" className="logo-placeholder-img" />
)}

              <p className="logo-info">
                Format: JPG, PNG, SVG &nbsp; Size: 2MB max.
              </p>

              <div className="logo-actions">
                <label className="upload-btn">
                  Upload
                  <input type="file" hidden onChange={handleLogoUpload} />
                </label>
                <button className="clear-btn" onClick={() => setLogo(null)}>
                  Clear
                </button>
              </div>
            </div>

            <label>Telephone No.</label>
            <input placeholder="Enter telephone no." />

            <label>Address 1 <span>*</span></label>
            <input placeholder="Enter your address" />

            <label>Address 3 <span>*</span></label>
            <input placeholder="Enter your address" />

            <label>City <span>*</span></label>
            <input placeholder="Enter your city" />

            <label>Country <span>*</span></label>
            <input placeholder="Enter your country" />

            <label>Website</label>
            <input placeholder="Enter your Website" />
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="form-actions">
          <button className="save-btn">Save</button>
          <button className="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default BusinessEntity;
