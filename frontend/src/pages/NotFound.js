import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#f8f9fa",
      }}
    >
      <h1 style={{ fontSize: "100px", color: "#387ed1" }}>
        404
      </h1>

      <h2>Page Not Found</h2>

      <p>
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="btn btn-primary mt-3"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;