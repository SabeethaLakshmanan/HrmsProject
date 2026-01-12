import { BrowserRouter, Routes, Route,Navigate  } from "react-router-dom";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import MainLayout from "../Layout/MainLayout";
import Profile from "../pages/Settings/Profile/Profile";
import Security from "../pages/Settings/Security/Security";
import EmployeeList from "../pages/Employee/EmployeeList/EmployeeList";
import AddEmployee from "../pages/Employee/AddEmployee/AddEmployee";
import ProfileOverview from "../pages/Employee/ProfileOverview/ProfileOverview";
import EditEmployee from "../pages/Employee/EditEmployee/EditEmployee";
import EmployeeDocuments from "../pages/Employee/Documents/EmployeeDocuments";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
         <Route path="/login" element={<Login />} />

        <Route path="/" element={<MainLayout />}>
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="settings/profile" element={<Profile />} />
         <Route path="settings/security" element={<Security />} />
         <Route path="employees/list" element={<EmployeeList />} />
         <Route path="employees/add" element={<AddEmployee />} />
         <Route path="employees/profile" element={<ProfileOverview />} />
         <Route path="/employee/edit" element={<EditEmployee />} />
          <Route path="/employees/documents/:id" element={<EmployeeDocuments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
