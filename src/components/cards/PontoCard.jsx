import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const PontoCard = ({ ponto }) => {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-white dark:bg-neutral-900 rounded-[2rem] border border-slate-100 dark:border-neutral-800 transition-all">
      <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">{ponto.nome}</h3>
      <p className="text-slate-500 dark:text-neutral-400 mb-6 leading-relaxed">
        {ponto.descricao?.length > 150 ? `${ponto.descricao.substring(0, 150)}...` : ponto.descricao}
      </p>
      <div className="flex justify-end">
        <Button variant="outline" onClick={() => navigate(`/detalhes/${ponto.id}`)}>
          ver detalhes
        </Button>
      </div>
    </div>
  );
};

export default PontoCard;