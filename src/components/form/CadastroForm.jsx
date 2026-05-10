import { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

const CadastroForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    nome: '', localizacao: '', cidade: '', estado: '', descricao: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }} className="space-y-6 max-w-2xl">
      <Input label="Nome:" name="nome" value={formData.nome} onChange={handleChange} />
      <Input label="Localização:" name="localizacao" value={formData.localizacao} onChange={handleChange} />
      
      <div className="flex gap-4">
        <div className="flex-[2]"><Input label="Cidade:" name="cidade" value={formData.cidade} onChange={handleChange} /></div>
        <div className="flex-1"><Input label="UF:" name="estado" value={formData.estado} onChange={handleChange} /></div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-bold text-gray-700 text-sm">Descritivo:</label>
        <textarea 
          name="descricao" 
          rows="5"
          value={formData.descricao} 
          onChange={handleChange}
          className="border border-gray-400 p-2 rounded w-full focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="secondary" onClick={onCancel}>voltar</Button>
        <Button type="submit">cadastrar</Button>
      </div>
    </form>
  );
};

export default CadastroForm;