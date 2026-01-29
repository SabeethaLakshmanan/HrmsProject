import React, { useState } from "react";
import "./AttendanceCalendar.css";
import { FiSearch, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import breadcrumbIcon from "../../assets/image/EmployeeList/breadcrumbIcon.png";
import exportIcon from "../../assets/image/EmployeeList/exportIcon.svg";
import { useNavigate } from "react-router-dom";

const stats = [
  { label: "Attendance Rate", value: "97%", delta: "+2.4%", color: "orange" },
  { label: "Today's Present", value: "142", delta: "+12%", color: "pink" },
  { label: "On Leave", value: "8", sub: "Planned", color: "blue" },
  { label: "Late Arrivals", value: "4", delta: "-2", color: "red" },
];

const AttendanceCalendar = () => {
    const navigate = useNavigate();
  const [selectedDate] = useState("Oct 8, 2024");

  return (
    <div className="calendar-page">
      {/* HEADER */}
      <div className="calendar-header">
        <div>
          <h2>Attendance Calendar</h2>
          <div className="breadcrumb">
            <img src={breadcrumbIcon} alt="breadcrumb" />
            <span>/</span>
            <span>Attendance Management</span>
            <span>/</span>
            <span className="active">Attendance Calendar</span>
          </div>
        </div>

        <button className="export-btn">
          <img src={exportIcon} alt="export" /> Export
        </button>
      </div>

      {/* STATS */}
      <div className="stats-row">
        {stats.map((s, i) => (
          <div key={i} className={`stat-card ${s.color}`}>
            <p className="stat-label">{s.label}</p>
            <h3>{s.value}</h3>
            {s.delta && <span className="stat-delta">{s.delta}</span>}
            {s.sub && <span className="stat-sub">{s.sub}</span>}
            <span className="view-link">View Details</span>
          </div>
        ))}
      </div>

      {/* FILTERS */}
      <div className="calendar-filters">
        <select><option>All Department</option></select>
        <select><option>All Shift</option></select>

        <div className="search-box">
          <FiSearch />
          <input placeholder="Search employee by name or ID" />
        </div>
      </div>

      {/* BODY */}
      <div className="calendar-body">
        {/* CALENDAR */}
        <div className="calendar-card">
          <div className="calendar-title">
            <h3>March <span>2021</span></h3>
            <div className="nav">
              <FiChevronLeft />
              <FiChevronRight />
            </div>
          </div>

          <div className="weekdays">
            {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
              <div key={d}>{d}</div>
            ))}
          </div>

          <div className="days-grid">
            {Array.from({ length: 31 }).map((_, i) => (
              <div key={i} className="day-cell">
                <span className="day-num">{i + 1}</span>
                <div className="bars">
                  <span className="bar present" />
                  <span className="dot absent" />
                  <span className="dot late" />
                  <span className="dot leave" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="day-panel">
          <div className="panel-header">
            <div>
              <h3>{selectedDate}</h3>
              <p>Tuesday, week 41</p>
            </div>
            <FiX size={18} />
          </div>

          <div className="panel-stats">
            <div><strong>Present</strong><span>128 / 155</span></div>
            <div><strong>Absent/Late</strong><span className="red">27</span></div>
          </div>

          <div className="search-day">
            <FiSearch />
            <input placeholder="Search this day..." />
          </div>

          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="person-row">
              <img src="https://i.pravatar.cc/40" alt="avatar" />
              <div>
                <strong>Sarah Connor</strong>
                <p>Engineering • shift A</p>
              </div>
              <span className={`tag ${i % 3 === 0 ? 'late' : i % 3 === 1 ? 'present' : 'absent'}`}>
                {i % 3 === 0 ? 'Late (15m)' : i % 3 === 1 ? 'Present' : 'Absent'}
              </span>
            </div>
          ))}

          <button className="full-report">View Full Day Report</button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceCalendar;
