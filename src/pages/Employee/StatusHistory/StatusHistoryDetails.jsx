import React from "react";
import "./StatusHistoryDetails.css";
import {
  FiAward,
  FiRepeat,
  FiGrid,
  FiFlag
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const history = [
  {
    date: "July 15, 2025",
    title: "Promoted to Senior Product Designer",
    desc: "Recognized for outstanding performance and leadership in the design team.",
    icon: <FiAward />,
    color: "gold"
  },
  {
    date: "Feb 24, 2025",
    title: "Manager Change",
    desc: "Manager changes from John Carter to Sarah Chen",
    icon: <FiRepeat />,
    color: "blue"
  },
  {
    date: "Sept 07, 2023",
    title: "Department Transfer",
    desc: "Transferred from the Marketing Department to the Product Department.",
    icon: <FiGrid />,
    color: "dark"
  },
  {
    date: "May 18, 2022",
    title: "Hired as Product Designer",
    desc: "Joined the company in the marketing department.",
    icon: <FiFlag />,
    color: "green"
  }
];

const StatusHistoryDetails = () => {
     const navigate= useNavigate();
  return (
    <div className="status-details-page">
      {/* HEADER */}
      <div className="status-header">
        <div>
          <h2>Status & History</h2>
          <p className="breadcrumb">
            Employee Management / <span>Status & History</span>
          </p>
        </div>
      </div>

      {/* CURRENT STATUS */}
      <div className="current-status">
        <div className="profile">
          <img
            src="https://i.pravatar.cc/100?img=32"
            alt="profile"
          />
          <div>
            <h4>
              Current Status <span className="active-dot" />
            </h4>
            <p>EMP ID: EMP_12547</p>
          </div>
        </div>

        <button className="deactivate-btn">
          Deactivate ▾
        </button>
      </div>

      {/* HISTORY */}
      <h3 className="history-title">Employment History</h3>

      <div className="timeline">
        {history.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className={`timeline-icon ${item.color}`}>
              {item.icon}
            </div>

            <div className="timeline-card">
              <span className="date">{item.date}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusHistoryDetails;
