import "./ProfileOverview.css";
import avatar from "../../../assets/image/avatar.png";
import breadcrumbIcon from "../../../assets/image/EmployeeList/breadcrumbIcon.png";
import { useNavigate } from "react-router-dom";


const ProfileOverview = () => {
  const navigate = useNavigate();
  return (
    <div className="profile-container">

      {/* HEADER */}
      <div className="profile-header">
         <div className="header-left">
          <h1 className="page-title">Profile Overview</h1>

          <div className="breadcrumb">
            <img src={breadcrumbIcon} alt="breadcrumb" />
            <span className="separator">/</span>
            <span>Employee Management</span>
            <span className="separator">/</span>
            <span className="active">Profile Overview</span>
          </div>
        </div>

        <button className="export-btn">Export</button>
      </div>

      {/* PROFILE CARD */}
      <div className="profile-card">
        <img src={avatar} alt="profile" className="profile-avatar" />

        <div className="profile-info">
          <h3 className="profile-name">Sophia Clark (Emp-1024)</h3>
          <p className="profile-role">Team Leader, Product Team</p>
          <p className="profile-meta">
            Joined on: 2022-08-15 | Sophia.clark@gmail.com | +91 95214 21570
          </p>
        </div>
      </div>

      {/* CONTENT GRID */}
      <div className="profile-grid">

        {/* LEFT */}
        <div className="profile-left">

          {/* TABS */}
          <div className="tabs">
            <span className="tab active">Personal Info</span>
            <span className="tab">Job Info</span>
            <span className="tab">Documents</span>
            <span className="tab">History</span>
          </div>

          {/* INFO CARD */}
          <div className="info-card">
            <div className="info-row">
              <div>
                <p className="info-label">Full Name</p>
                <p className="info-value">Sophia Clark</p>
              </div>
              <div>
                <p className="info-label">Employee ID</p>
                <p className="info-value">12345</p>
              </div>
            </div>

            <div className="info-row">
              <div>
                <p className="info-label">DOB</p>
                <p className="info-value">13 Dec 2025</p>
              </div>
              <div>
                <p className="info-label">Gender</p>
                <p className="info-value">Female</p>
              </div>
            </div>

            <div className="info-row">
              <div>
                <p className="info-label">Department</p>
                <p className="info-value">Marketing</p>
              </div>
              <div>
                <p className="info-label">Designation</p>
                <p className="info-value">Marketing Manager</p>
              </div>
            </div>

            <div className="info-row">
              <div>
                <p className="info-label">Email</p>
                <p className="info-value">sophia.clark@example.com</p>
              </div>
              <div>
                <p className="info-label">Email</p>
                <p className="info-value">sophia.clark@example.com</p>
              </div>
            </div>

            <div className="info-row full">
              <div>
                <p className="info-label">Address</p>
                <p className="info-value">
                  451 street, Apt 7B, SpringField, IL, 60241, USA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="profile-right">

          {/* QUICK ACTION */}
          <div className="side-card">
            <h4 className="side-title">Quick Action</h4>
            <button className="btn-primary full"
            onClick={() => navigate("/employee/edit")}
            >Edit Employee</button>
            <button className="btn-danger full">Deactivate Employee</button>
            <button className="btn-outline full">View Punch In/Out</button>
          </div>

          {/* JOB DETAILS */}
          <div className="side-card">
            <h4 className="side-title">Job Details</h4>

            <div className="detail-row">
              <span>Employment Type</span>
              <strong>Full-Time</strong>
            </div>

            <div className="detail-row">
              <span>Reporting Manager</span>
              <strong>John Smith</strong>
            </div>

            <div className="detail-row">
              <span>Work Location</span>
              <strong>New York Office</strong>
            </div>

            <div className="detail-row">
              <span>Salary</span>
              <strong className="confidential">Confidential</strong>
            </div>

            <div className="detail-row">
              <span>Contact Number</span>
              <strong>+91 95214 93214</strong>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
