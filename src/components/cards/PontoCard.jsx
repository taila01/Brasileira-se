import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const PontoCard = ({ ponto }) => {
  const navigate = useNavigate();

  return (
    <div className="border-b border-gray-200 py-6 last:border-0">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{ponto.nome}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">
        {ponto.descricao?.length > 150 ? `${ponto.descricao.substring(0, 150)}...` : ponto.descricao}
      </p>
      <Button variant="outline" onClick={() => navigate(`/detalhes/${ponto.id}`)}>
        ver detalhes
      </Button>
    </div>
  );
};

export default PontoCard;