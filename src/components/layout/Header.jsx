import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center py-6 border-b border-gray-200 mb-8">
      <div 
        className="border-2 border-gray-400 px-8 py-4 cursor-pointer text-gray-500 font-bold"
        onClick={() => navigate('/')}
      >
        Logotipo
      </div>
      <Button onClick={() => navigate('/novo')}>
        cadastrar um ponto turístico
      </Button>
    </header>
  );
};

export default Header;