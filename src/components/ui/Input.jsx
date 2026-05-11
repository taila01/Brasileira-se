const Input = ({ label, type = "text", value, onChange, name, placeholder, className = "" }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      {label && <label className="font-bold text-slate-700 dark:text-gray-200 text-sm ml-2">{label}</label>}
      <input 
        type={type} 
        name={name} 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} 
        className={`bg-slate-100 dark:bg-neutral-800 border-2 border-transparent focus:border-blue-500 p-4 rounded-[1.5rem] w-full text-slate-900 dark:text-white focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-neutral-500 ${className}`}
      />
    </div>
  );
};

export default Input;