import { FaBell, FaUserCircle } from "react-icons/fa";

function Topbar() {
  return (
    <div className="d-flex justify-content-between align-items-center bg-white shadow-sm p-3 rounded mb-4">

      <div>
        <h4 className="mb-0">Dashboard</h4>
        <small className="text-muted">
          Welcome back 👋
        </small>
      </div>

      <div className="d-flex align-items-center gap-3">

        <input
          type="text"
          className="form-control"
          placeholder="Search stocks..."
          style={{ width: "250px" }}
        />

        <FaBell size={22} />

        <FaUserCircle size={34} />

      </div>
    </div>
  );
}

export default Topbar;