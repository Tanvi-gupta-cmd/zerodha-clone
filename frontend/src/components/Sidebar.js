import { NavLink, useNavigate } from "react-router-dom";
import {
  FaChartLine,
  FaShoppingCart,
  FaWallet,
  FaCoins,
  FaUserCircle,
  FaExchangeAlt,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const menu = [
    {
      name: "Dashboard",
      icon: <FaChartLine />,
      path: "/dashboard",
    },
    {
      name: "Orders",
      icon: <FaShoppingCart />,
      path: "/orders",
    },
    {
      name: "Holdings",
      icon: <FaWallet />,
      path: "/holdings",
    },
    {
      name: "Positions",
      icon: <FaExchangeAlt />,
      path: "/positions",
    },
    {
      name: "Funds",
      icon: <FaCoins />,
      path: "/funds",
    },
    {
      name: "Profile",
      icon: <FaUserCircle />,
      path: "/profile",
    },
  ];

  return (
    <div
      className="d-flex flex-column bg-dark text-white p-3"
      style={{
        width: "250px",
        minHeight: "100vh",
      }}
    >
      <h3 className="mb-4 text-center">Kite Clone</h3>

      {menu.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `btn text-start mb-2 ${
              isActive ? "btn-primary" : "btn-outline-light"
            }`
          }
        >
          <span className="me-2">{item.icon}</span>
          {item.name}
        </NavLink>
      ))}

      <button
        className="btn btn-danger mt-auto"
        onClick={logout}
      >
        <FaSignOutAlt className="me-2" />
        Logout
      </button>
    </div>
  );
}

export default Sidebar;