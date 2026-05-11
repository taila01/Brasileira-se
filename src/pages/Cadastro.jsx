import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import Header from "../components/layout/Header";
import CadastroForm from '../components/form/CadastroForm';

const Cadastro = () => {
  const navigate = useNavigate();

  const handleCadastro = async (formData) => {
    try {
      await api.post('/PontoTuristico', formData);
      alert('Ponto turístico cadastrado com sucesso!');
      navigate('/'); 
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert('Erro ao salvar os dados. Verifique se o back-end está rodando.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <Header />
        
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-slate-800 dark:text-white mb-2">Novo Ponto Turístico</h1>
          <p className="text-slate-500 dark:text-neutral-400">Preencha os campos abaixo para registrar um local.</p>
        </div>

        <main className="flex justify-center">
          <CadastroForm 
            onSubmit={handleCadastro} 
            onCancel={() => navigate('/')} 
          />
        </main>
      </div>
    </div>
  );
};

export default Cadastro;