import "./usersearch.css";

const UserSearch = ({ className, type, onChange, onClear, value }) => {
  return (
    <>
      <div className="input-wrapper">
        <input
          className={`searchInp ${className || ""}`}
          type={type}
          onChange={onChange}
          value={value}
        />

        {value && (
          <button
            type="button"
            className="inpCross"
            onClick={onClear}
            aria-label="Clear input"
          >
            X
          </button>
        )}
      </div>
    </>
  );
};

export default UserSearch;
