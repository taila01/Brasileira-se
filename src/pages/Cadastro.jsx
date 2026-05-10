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
    <div className="max-w-4xl mx-auto px-4 pb-20">
      <Header />
      
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Novo Ponto Turístico</h1>
        <p className="text-gray-500">Preencha os campos abaixo para registrar um local.</p>
      </div>

      <main className="bg-white">
        <CadastroForm 
          onSubmit={handleCadastro} 
          onCancel={() => navigate('/')} 
        />
      </main>
    </div>
  );
};

export default Cadastro;