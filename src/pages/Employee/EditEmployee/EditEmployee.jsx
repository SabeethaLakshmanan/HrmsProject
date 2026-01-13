import "./EditEmployee.css";
import avatar from "../../../assets/image/avatar.png";
import breadcrumbIcon from "../../../assets/image/EmployeeList/breadcrumbIcon.png";
import editIcon from "../../../assets/image/EmployeeList/edit.png";
import { useNavigate, useParams } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import exportIcon from "../../../assets/image/EmployeeList/exportIcon.svg";
import uploadIcon from "../../../assets/image/EmployeeList/typcn_upload.png";


const EditEmployee = () => {
  const navigate = useNavigate();
   const { id = "EMP_12547" } = useParams();

  return (
    <div className="edit-page">

      {/* HEADER */}
      <div className="edit-header">
        <div>
          <h2>Edit Employee</h2>
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
            Export</button>
      </div>

      {/* PROFILE SUMMARY */}
      <div className="employee-summary">
        <img src={avatar} alt="profile" />
        <div className="summary-text">
          <h4>
            Samantha Gorge
            <img src={editIcon} alt="edit" className="edit-icon" />
          </h4>
          <p className="emp-id">EMP ID: EMP_12547</p>
        </div>
      </div>

      {/* PERSONAL INFORMATION */}
      <div className="edit-card">
        <div className="card-header">
          <div className="card-title">Personal Information</div>
           <FiEdit2 className="edit-icon" />
          {/* <img src={editIcon} alt="edit" className="edit-icon" /> */}
        </div>

        <div className="form-grid">
          <div>
            <label>Full Name</label>
            <input value="Samantha Gorge" />
          </div>

          <div>
            <label>Gender</label>
            <select><option>Female</option></select>
          </div>

          <div>
            <label>Date of Birth</label>
            <input type="date" value="1999-12-06" />
          </div>

          <div>
            <label>Personal Email</label>
            <input value="sam.g1999@gmail.com" />
          </div>

          <div>
            <label>Personal Phone</label>
            <input value="+91 95120 84260" />
          </div>
        </div>
      </div>

      {/* JOB DETAILS */}
      <div className="edit-card">
        <div className="card-header">
          <div className="card-title">Job Details</div>
          <FiEdit2 className="edit-icon" />
        </div>

        <div className="form-grid">
          <div>
            <label>Department</label>
            <select><option>Product Designer</option></select>
          </div>

          <div>
            <label>Designation</label>
            <select><option>Senior Product Designer</option></select>
          </div>

          <div>
            <label>Manager</label>
            <select><option>Alex Johnson</option></select>
          </div>

          <div>
            <label>Joining Date</label>
            <input type="date" value="2022-02-21" />
          </div>

          <div>
            <label className="disabled-label">Employee ID</label>
            <input
              defaultValue={id}
              readOnly
              className="readonly-input"
            />
          </div>

          <div>
            <label>Shift</label>
            <select><option>Day Shift (9am - 7pm)</option></select>
          </div>
        </div>
      </div>

      {/* CONTACT DETAILS */}
      <div className="edit-card">
        <div className="card-header">
          <div className="card-title">Contact Details</div>
          <FiEdit2 className="edit-icon" />
        </div>

        <div className="form-grid">
          <div>
            <label>Office Email</label>
            <input value="samantha@company.com" />
          </div>

          <div>
            <label>Emergency Contact Number</label>
            <input defaultValue="+91 98521 07800" />
          </div>

          <div className="full-width">
            <label>Address</label>
            <input value="13 Design Lane, Creativity City, CA, 94102" />
          </div>
        </div>
      </div>

      {/* DOCUMENT MANAGEMENT */}
      <div className="edit-card">
        <div className="card-header">
          <div className="card-title">Document Management</div>
          <FiEdit2 
          className="edit-icon" />
        </div>

          <div className="document-list">
          {["Resume.pdf", "ID_Proof.pdf", "Offer-Letter-Signed.pdf"].map(
            (doc, i) => (
              <div className="document-item" key={i}>
                <span>{doc}</span>
                <button
                  className="doc-btn"
                  onClick={() => navigate(`/employees/documents/${id}`)}
                >
                  <img src={uploadIcon} alt="upload" className="upload-icon" />
                  Update
                </button>
              </div>
            )
          )}
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="form-actions">
        <button className="btn-primary">Save Changes</button>
        <button className="btn-outline" onClick={() => navigate(-1)}>
          Cancel
        </button>
      </div>

    </div>
  );
};

export default EditEmployee;













// import "./EditEmployee.css";
// import avatar from "../../../assets/image/avatar.png";
// import breadcrumbIcon from "../../../assets/image/EmployeeList/breadcrumbIcon.png";
// import { useNavigate } from "react-router-dom";
// import editIcon from "../../../assets/image/EmployeeList/edit.png"; // or svg from figma

// const EditEmployee = () => {
//     const navigate = useNavigate();
//   return (
//     <div className="edit-page">

//       {/* TOP BAR */}
//       <div className="edit-header">
//         <div>
//           <h2>Edit Employee</h2>
//           <div className="breadcrumb">
//             <img src={breadcrumbIcon} alt="" />
//             <span className="separator">/</span>
//             <span>Employee Management</span>
//             <span className="separator">/</span>
//             <span className="active">Edit Employee</span>
//           </div>
//         </div>

//         <button className="export-btn">Export</button>
//       </div>

//       {/* EMPLOYEE SUMMARY */}
//       <div className="employee-summary">
//         <img src={avatar} alt="profile" />
//           <div className="summary-text">
        
//           <h4>Samantha Gorge
//             <img src={editIcon} alt="edit" className="edit-icon" />
//           </h4>
//           <p>EMP ID: EMP_12547</p>
//         </div>
//       </div>

//       {/* PERSONAL INFO */}
//       <div className="edit-card">
//         <div className="card-title">Personal Information</div>

//         <div className="form-grid">
//           <div>
//             <label>Full Name</label>
//             <input value="Samantha Gorge" />
//           </div>

//           <div>
//             <label>Gender</label>
//             <select>
//               <option>Female</option>
//             </select>
//           </div>

//           <div>
//             <label>Date of Birth</label>
//             <input type="date" value="1999-12-06" />
//           </div>

//           <div>
//             <label>Personal Email</label>
//             <input value="sam.g1999@gmail.com" />
//           </div>

//           <div>
//             <label>Personal Phone</label>
//             <input value="+91 95120 84260" />
//           </div>
//         </div>
//       </div>
//  {/* JOB DETAILS */}
//       <div className="edit-card">
//         <div className="card-title">Job Details</div>

//         <div className="form-grid">
//           <div>
//             <label>Department</label>
//             <select>
//               <option>Product Designer</option>
//             </select>
//           </div>

//           <div>
//             <label>Designation</label>
//             <select>
//               <option>Senior Product Designer</option>
//             </select>
//           </div>

//           <div>
//             <label>Manager</label>
//             <select>
//               <option>Alex Johnson</option>
//             </select>
//           </div>

//           <div>
//             <label>Joining Date</label>
//             <input type="date" value="2022-02-21" />
//           </div>

//           <div>
//             <label>Employee ID</label>
//             <input value="EMP_12547" disabled />
//           </div>

//           <div>
//             <label>Shift</label>
//             <select>
//               <option>Day Shift (9am - 7pm)</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* CONTACT DETAILS */}
//       <div className="edit-card">
//         <div className="card-title">Contact Details</div>

//         <div className="form-grid">
//           <div>
//             <label>Office Email</label>
//             <input value="samantha@company.com" />
//           </div>

//           <div>
//             <label>Emergency Contact Number</label>
//             <input value="+91 98521 07800" />
//           </div>

//           <div className="full-width">
//             <label>Address</label>
//             <input value="13 Design Lane, Creativity City, CA, 94102" />
//           </div>
//         </div>
//       </div>

//       {/* FOOTER ACTIONS */}
//       <div className="form-actions">
//         <button className="btn-primary">Save Changes</button>
//         <button
//           className="btn-outline"
//           onClick={() => navigate(-1)}
//         >
//           Cancel
//         </button>
//       </div>
// <div className="edit-card">
//   <div className="card-header">
//     <div className="card-title">Document Management</div>
//     <img src={editIcon} alt="edit" className="edit-icon" />
//   </div>

//   <div className="document-list">
//     <div className="document-item">
//       <span>Resume.pdf</span>
//       <button className="doc-btn">Update</button>
//     </div>

//     <div className="document-item">
//       <span>ID_Proof.pdf</span>
//       <button className="doc-btn">Update</button>
//     </div>

//     <div className="document-item">
//       <span>Offer-Letter-Signed.pdf</span>
//       <button className="doc-btn">Update</button>
//     </div>
//   </div>
// </div>

//     </div>

    
//   );
// };

// export default EditEmployee;
