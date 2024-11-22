const Navbar = ({ searchId, setSearchId, onSearch }) => {
  return (
    <div className="navbar">
      <h1>Admin Dashboard</h1>
      <div className="navbar-search">
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="Search by ID"
        />
        <button onClick={onSearch}>Search</button>
      </div>
    </div>
  );
};

export default Navbar;
