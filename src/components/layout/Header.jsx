import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center py-10 mb-8">
      <div 
        className="text-2xl font-black tracking-tighter text-slate-800 dark:text-white cursor-pointer uppercase"
        onClick={() => navigate('/')}
      >
        Brasil<span className="text-blue-600">eira</span>
      </div>
      <Button onClick={() => navigate('/novo')}>
        cadastrar um ponto turístico
      </Button>
    </header>
  );
};

export default Header;