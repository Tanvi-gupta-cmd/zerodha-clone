import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-light bg-white shadow-sm px-4">
      <div className="container-fluid">

        <h4 className="fw-bold mb-0">
          Zerodha Dashboard
        </h4>

        <div className="d-flex align-items-center">

          <div className="input-group me-3" style={{ width: "280px" }}>
            <span className="input-group-text">
            </span>

            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
          </div>

          <button className="btn btn-light me-2">
          </button>

          <button
            className="btn btn-danger"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;