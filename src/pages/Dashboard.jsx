import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import BulkActions from "../components/BulkActions";
import { fetchUsers } from "../utils/api";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleBulkDelete = () => {
    setUsers(users.filter((user) => !selectedUsers.includes(user.id)));
    setSelectedUsers([]);
  };

  const toggleSelect = (id) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((uid) => uid !== id) : [...prev, id]
    );
  };

  const handleSearch = () => {
    setUsers((prev) => prev.filter((user) => user.id === Number(searchId)));
  };

  if (loading) {
    return (
      <div className="dashboard">
        <Navbar
          searchId={searchId}
          setSearchId={setSearchId}
          onSearch={handleSearch}
        />
        <div className="loading">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <Navbar
        searchId={searchId}
        setSearchId={setSearchId}
        onSearch={handleSearch}
      />
      <BulkActions
        selectedUsers={selectedUsers}
        onBulkDelete={handleBulkDelete}
      />
      <div className="cards-container">
        {users.map((user) => (
          <Card
            key={user.id}
            user={user}
            onDelete={handleDelete}
            onSelect={toggleSelect}
            selected={selectedUsers.includes(user.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
