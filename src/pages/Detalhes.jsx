import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import Header from '../components/layout/Header';
import Button from "../components/ui/Button";

const Detalhes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ponto, setPonto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPonto = async () => {
      try {
        const response = await api.get(`/PontoTuristico/${id}`);
        setPonto(response.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes:", error);
        alert("Ponto turístico não encontrado.");
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    fetchPonto();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-neutral-950">
        <p className="text-slate-500 animate-pulse">Carregando informações...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <Header />

        <main className="bg-white dark:bg-neutral-900 p-10 rounded-[3rem] shadow-xl border border-slate-100 dark:border-neutral-800">
          <div className="mb-10">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">
              {ponto.cidade} - {ponto.estado}
            </span>
            <h1 className="text-4xl font-black text-slate-800 dark:text-white mt-2">
              {ponto.nome}
            </h1>
          </div>

          <div className="grid gap-8">
            <section>
              <h2 className="text-sm font-bold text-slate-400 uppercase mb-3 ml-2">Localização Exata</h2>
              <div className="bg-slate-100 dark:bg-neutral-800 p-5 rounded-[1.5rem] text-slate-700 dark:text-neutral-300">
                {ponto.localizacao}
              </div>
            </section>

            <section>
              <h2 className="text-sm font-bold text-slate-400 uppercase mb-3 ml-2">Sobre o ponto turístico</h2>
              <p className="text-lg text-slate-600 dark:text-neutral-400 leading-relaxed px-2">
                {ponto.descricao || "Nenhuma descrição detalhada fornecida para este local."}
              </p>
            </section>
          </div>

          <footer className="mt-12 pt-8 border-t border-slate-100 dark:border-neutral-800 flex justify-between items-center">
            <div className="text-xs text-slate-400 italic">
              Registrado em: {new Date(ponto.dataInclusao).toLocaleDateString('pt-BR')}
            </div>
            <Button onClick={() => navigate('/')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-xl h-12 transition-all">
              voltar para a listagem
            </Button>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Detalhes;