const Button = ({ children, onClick, type = "button", variant = "primary" }) => {
  const styles = {
    primary: "bg-gray-200 hover:bg-gray-300 text-gray-800 border border-gray-400",
    outline: "bg-transparent hover:bg-gray-100 text-gray-600 border border-gray-300",
    secondary: "bg-white hover:bg-gray-50 text-gray-500 border border-gray-300"
  };

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`px-4 py-2 rounded shadow-sm transition-all text-sm font-medium ${styles[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;