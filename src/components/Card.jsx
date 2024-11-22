import { Link } from "react-router-dom";

const Card = ({ user, isSelected, onSelect, onDelete }) => (
  <div className={`card ${isSelected ? "selected" : ""}`}>
    {console.log(isSelected)}
    <Link to={`/user/${user.id}`} className="card-link">
      <h3>{user.name}</h3>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>City:</strong> {user.city}
      </p>
    </Link>
    <div className="card-actions">
      <button className="delete-btn" onClick={() => onDelete(user.id)}>
        Delete
      </button>
      <button className="edit-btn" disabled>
        Edit
      </button>
    </div>
    <input
      type="checkbox"
      checked={isSelected}
      onChange={() => onSelect(user.id)}
      className="select-checkbox"
    />
  </div>
);

export default Card;
