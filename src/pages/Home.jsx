import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Header from "../components/layout/Header";
import PontoCard from "../components/cards/PontoCard";

const Home = () => {
  const [pontos, setPontos] = useState([]);
  const [busca, setBusca] = useState('');
  const navigate = useNavigate();

  const fetchPontos = async (termo = '') => {
    try {
      const response = await api.get(`/PontoTuristico?busca=${termo}`);
      setPontos(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
    }
  };

  useEffect(() => {
    fetchPontos();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <Header />

        <main className="mt-10">
          <div className="flex flex-col md:flex-row gap-4 mb-16 items-center bg-white dark:bg-neutral-900 p-6 rounded-[2.5rem] shadow-sm border border-slate-200 dark:border-neutral-800">
            <div className="flex-1 w-full">
              <Input 
                placeholder="Pesquisar ponto turístico..." 
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="bg-slate-100 dark:bg-neutral-800 border-none rounded-2xl h-14"
              />
            </div>
            <Button 
              onClick={() => fetchPontos(busca)}
              className="w-full md:w-auto px-10 h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all"
            >
              buscar
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {pontos.length > 0 ? (
              pontos.map((ponto) => (
                <div key={ponto.id} className="bg-white dark:bg-neutral-900 rounded-[2rem] p-2 shadow-md border border-slate-100 dark:border-neutral-800 overflow-hidden hover:scale-[1.01] transition-transform">
                  <PontoCard ponto={ponto} />
                </div>
              ))
            ) : (
              <div className="text-center py-32 bg-white/50 dark:bg-neutral-900/50 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-neutral-800">
                <p className="text-2xl font-medium text-slate-400 dark:text-neutral-500">
                  Nenhum local encontrado por aqui...
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;