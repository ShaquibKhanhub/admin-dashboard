import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  return (
    <div className="employee-card">
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>City: {user?.address.city}</p>
          <p>Company: {user.company.name}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <Link to="/" className="go-back-btn">
        <FaArrowLeft size={20} />
        <span>Dashboard</span>
      </Link>
    </div>
  );
};

export default UserDetail;
