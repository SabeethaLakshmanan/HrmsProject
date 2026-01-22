import React from "react";
import "./BusinessUnitForm.css";
import { useNavigate, useParams } from "react-router-dom";
const BusinessUnitForm = () => {
     const navigate = useNavigate();
  const { id } = useParams();       
  const isEdit = Boolean(id);
  return (
    <div className="business-unit-page">
         <div className="business-unit-wrapper"></div>
      {/* Header */}
      <div className="page-header">
        <h1 className="page-title">
  {isEdit ? "Business Unit" : "Add Business Unit"}
</h1>
</div>

      

      {/* Card */}
      <div className="form-card">
        <div className="form-grid">
          <FormInput label="Name" required placeholder="Enter full name" />
          <FormInput label="Email ID" required placeholder="Enter your Email Id" />

          <FormInput label="Mobile No." required placeholder="Enter your mobile no." />
          <FormInput label="Telephone No." placeholder="Enter telephone no." />

          <FormInput label="Address 1" required placeholder="Enter your address" />
          <FormInput label="Address 2" required placeholder="Enter your address" />

          <FormInput label="Address 3" placeholder="Enter your address" />
          <FormInput label="Pin Code" required placeholder="Enter Pin Code" />

          <FormInput label="City" required placeholder="Enter your city" />
          <FormInput label="State" required placeholder="Enter your state" />

          <FormInput label="Country" required placeholder="Enter your country" />
          <FormInput label="Website" placeholder="Enter your Website" />

          <FormInput label="GST No" placeholder="Enter your GST No" />
        </div>

        {/* Upload */}
        <div className="upload-box">
          <h3>Upload Your Logo</h3>
          <p>Drag and drop or browse to upload</p>

          <div className="upload-actions">
            <button className="btn-primary">Upload</button>
            <button className="btn-outline">Clear</button>
          </div>
        </div>

        {/* Footer buttons */}
        <div className="form-footer">
          <button className="btn-primary">Save</button>
          <button
  className="btn-outline"
  onClick={() => navigate("/configuration/business-units")}
>
  Cancel
</button>
        </div>
      </div>
    </div>
  );
};

const FormInput = ({ label, required, placeholder }) => (
  <div className="form-field">
    <label>
      {label} {required && <span className="required">*</span>}
    </label>
    <input type="text" placeholder={placeholder} />
  </div>
);

export default BusinessUnitForm;
