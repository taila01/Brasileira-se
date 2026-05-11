import { useState, useEffect } from 'react';
import api from '../../services/api';
import Button from '../ui/Button';

const CadastroForm = ({ onSubmit, onCancel }) => {
  const [estados, setEstados] = useState([]);
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    localizacao: '',
    cidade: '',
    estado: '',
    dt_inclusao: new Date().toISOString()
  });

  useEffect(() => {
    api.get('/Estados')
      .then(res => setEstados(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white dark:bg-neutral-900 p-10 rounded-[3rem] border border-slate-100 dark:border-neutral-800 shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-sm font-bold text-slate-700 dark:text-neutral-300 ml-4">Nome do Local</label>
          <input
            required
            type="text"
            className="p-4 rounded-2xl bg-slate-50 dark:bg-neutral-800 border-none text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-slate-700 dark:text-neutral-300 ml-4">Cidade</label>
          <input
            required
            type="text"
            className="p-4 rounded-2xl bg-slate-50 dark:bg-neutral-800 border-none text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.cidade}
            onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-slate-700 dark:text-neutral-300 ml-4">Estado</label>
          <select
            required
            className="p-4 rounded-2xl bg-slate-50 dark:bg-neutral-800 border-none text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            value={formData.estado}
            onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
          >
            <option value="">Selecione</option>
            {estados.map((est) => (
              <option key={est.id} value={est.sigla}>
                {est.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-sm font-bold text-slate-700 dark:text-neutral-300 ml-4">Localização / Endereço</label>
          <input
            required
            type="text"
            className="p-4 rounded-2xl bg-slate-50 dark:bg-neutral-800 border-none text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.localizacao}
            onChange={(e) => setFormData({ ...formData, localizacao: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-sm font-bold text-slate-700 dark:text-neutral-300 ml-4">Descrição</label>
          <textarea
            rows="4"
            className="p-4 rounded-3xl bg-slate-50 dark:bg-neutral-800 border-none text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            value={formData.descricao}
            onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
          />
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-10">
        <Button variant="secondary" type="button" onClick={onCancel}>
          Cancelar
        </Button>
        <Button variant="primary" type="submit">
          Salvar Ponto Turístico
        </Button>
      </div>
    </form>
  );
};

export default CadastroForm;