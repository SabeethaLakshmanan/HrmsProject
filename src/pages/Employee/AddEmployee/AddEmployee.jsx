import "./AddEmployee.css";
import breadcrumbIcon from "../../../assets/image/EmployeeList/breadcrumbIcon.png";

const AddEmployee = () => {
  return (
    <div className="add-employee-container">
      
      {/* PAGE HEADER */}
      <div className="add-employee-header">
        <div>
          <h1 className="page-title">Add Employee</h1>

          <div className="breadcrumb">
          <img src={breadcrumbIcon} alt="breadcrumb" />
          <span>Employee Management</span>
          <span className="active">Add Employee</span>
        </div>
        </div>

        <button className="export-btn">Export</button>
      </div>

      {/* FORM */}
      <div className="form-card">
        
        {/* PERSONAL INFO */}
        <h3 className="section-title">Personal Information</h3>

        <div className="form-grid">
          <div className="form-group">
            <label className="field-label">Full Name</label>
            <input placeholder="Enter full name" />
          </div>

          <div className="form-group">
            <label className="field-label">Gender</label>
            <select>
              <option>Select gender</option>
            </select>
          </div>

          <div className="form-group">
            <label className="field-label">Date of Birth</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label className="field-label">Personal Email</label>
            <input placeholder="Enter personal email" />
          </div>

          <div className="form-group">
            <label className="field-label">Personal Phone</label>
            <input placeholder="Enter personal phone" />
          </div>

          <div className="form-group">
            <label className="field-label">Emergency Contact</label>
            <input placeholder="Enter emergency contact" />
          </div>

          <div className="form-group full">
            <label className="field-label">Address</label>
            <textarea />
          </div>
        </div>

        {/* JOB INFO */}
        <h3 className="section-title">Job Information</h3>

        <div className="form-grid">
          <div className="form-group">
            <label className="field-label">Department</label>
            <select>
              <option>Select department</option>
            </select>
          </div>

          <div className="form-group">
            <label className="field-label">Designation</label>
            <select>
              <option>Select designation</option>
            </select>
          </div>

          <div className="form-group">
            <label className="field-label">Joining Date</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label className="field-label">Employee ID</label>
            <input value="EMP-12547" disabled />
          </div>

          <div className="form-group">
            <label className="field-label">Reporting Manager</label>
            <select>
              <option>Select manager</option>
            </select>
          </div>

          <div className="form-group">
            <label className="field-label">Shift</label>
            <select>
              <option>Select shift</option>
            </select>
          </div>
        </div>

        {/* CONTACT INFO */}
        <h3 className="section-title">Contact Information</h3>

        <div className="upload-grid">
          <div>
              <h4 className="sub-heading">Uploads</h4>
          <div className="upload-box">
            <p className="upload-title">Upload Profile Photo</p>
            <p className="upload-sub">Drag and drop or browse to upload</p>
            <button className="upload-btn">Upload</button>
          </div>
          </div>
             
            <div>
  <h4 className="sub-heading">Documents</h4>

<div className="doc-box">
  <div className="doc-row-figma">
      <div className="doc-label-box">ID Proof</div>
    <button className="doc-upload-btn">Upload</button>
  </div>

   <div className="doc-row-figma">
      <div className="doc-label-box">Employment Contract</div>
    <button className="doc-upload-btn">Upload</button>
  </div>
</div>

        </div>
        </div>

        {/* ACTIONS */}
        <div className="form-actions">
          <button className="btn-primary">Save</button>
          <button className="btn-secondary">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;











// import React from 'react'

// const AddEmployee = () => {
//   return (
//     <div>AddEmployee</div>
//   )
// }

// export default AddEmployee