import "./Country.css";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import breadcrumbIcon from "../../../assets/image/EmployeeList/breadcrumbIcon.png";

const CountryList = () => {
  const navigate = useNavigate();

  return (
    <div className="country-page">
      {/* HEADER */}
      <div className="country-header">
        <div>
          <h2>Country</h2>
          <div className="breadcrumb">
            <img src={breadcrumbIcon} alt="breadcrumb" />
             <span className="separator">/</span>
            Configuration / <span>Country</span>
          </div>
        </div>

        <button
          className="add-btn"
          onClick={() => navigate("/configuration/country/add")}
        >
          + Add Country
        </button>
      </div>

      {/* TABLE CARD */}
      <div className="country-card">
        <table className="country-table">
          <thead>
            <tr>
              <th>Country Name</th>
              <th>Country Code</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {[
              { name: "United States", code: "US" },
              { name: "Canada", code: "CA" },
              { name: "United Kingdom", code: "UK" },
              { name: "Germany", code: "DE" },
              { name: "France", code: "FR" },
            ].map((c, i) => (
              <tr key={i}>
                <td>{c.name}</td>
                <td className="code">{c.code}</td>
                <td>
                  <span className="status active">Active</span>
                </td>
                <td>
                     <div className="actions">
                    <FiEdit
                      className="edit-icon"
                      onClick={() =>
                        navigate(`/configuration/country/edit/${c.id}`)
                      }
                    />
                    <FiTrash2
                      className="delete-icon"
                      onClick={() =>
                        console.log("Delete country", c.id)
                      }
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CountryList;
