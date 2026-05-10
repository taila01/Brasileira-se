const Input = ({ label, type = "text", value, onChange, name, placeholder }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="font-bold text-gray-700 text-sm">{label}</label>}
      <input 
        type={type} 
        name={name} 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} 
        className="border border-gray-400 p-2 rounded w-full focus:outline-none focus:ring-1 focus:ring-gray-500"
      />
    </div>
  );
};

export default Input;