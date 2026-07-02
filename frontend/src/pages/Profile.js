import React, { useEffect, useState } from "react";
import API from "../api/api";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/user/profile", {
        headers: {
          Authorization: token,
        },
      });

      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!user) return <h3>Loading...</h3>;

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        <h3>Profile</h3>

        <hr />

        <h5>Name: {user.name}</h5>
        <h5>Email: {user.email}</h5>

        <div className="mt-3">
          <span className="badge bg-success">
            Active User
          </span>
        </div>
      </div>
    </div>
  );
}

export default Profile;