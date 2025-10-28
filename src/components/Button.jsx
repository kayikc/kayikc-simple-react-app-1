function Button({ onClick, children, disabled }) {
  return (
    <button
      onClick={onClick}
      disable={disabled}
      style={{
        padding: "10px 20px",
      }}
    >
      {children}
    </button>
  );
}
export default Button;
