const Button = ({ children, onClick, type = "button", variant = "primary", className = "" }) => {
  const styles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 dark:shadow-none",
    outline: "bg-transparent hover:bg-slate-100 dark:hover:bg-neutral-800 text-slate-600 dark:text-neutral-300 border-2 border-slate-200 dark:border-neutral-800",
    secondary: "bg-slate-200 hover:bg-slate-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-slate-700 dark:text-neutral-300"
  };

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`px-8 py-4 rounded-full transition-all text-sm font-bold uppercase tracking-wider ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;