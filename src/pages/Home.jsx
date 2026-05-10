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
      // Faz o GET para: http://localhost:5000/api/PontoTuristico?busca=...
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
    <div className="max-w-4xl mx-auto px-4">
      <Header />

      <main>
        <div className="flex flex-col md:flex-row gap-4 mb-12 items-end">
          <div className="flex-1">
            <Input 
              placeholder="Digite um termo para buscar um ponto turístico..." 
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
          <Button onClick={() => fetchPontos(busca)}>buscar</Button>
        </div>

        {/* Listagem de Resultados */}
        <div className="space-y-2">
          {pontos.length > 0 ? (
            pontos.map((ponto) => (
              <PontoCard key={ponto.id} ponto={ponto} />
            ))
          ) : (
            <div className="text-center py-20">
              <p className="text-xl font-bold text-gray-700">
                Não encontrei nenhum resultado para a sua busca :(
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;