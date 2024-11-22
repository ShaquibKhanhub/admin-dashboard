const BulkActions = ({ selectedUsers, onBulkDelete }) => {
    return (
      <div className="bulk-actions">
        <button onClick={onBulkDelete} disabled={selectedUsers.length === 0}>
          Bulk Delete 
        </button>
      </div>
    );
  };
  
  export default BulkActions;
  