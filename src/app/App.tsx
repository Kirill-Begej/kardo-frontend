import { Link } from 'react-router-dom';
import { AppRouter } from 'app/providers/router';

const App = () => {
  return (
    <>
      <header>
        <Link to='/'>Главная</Link>
        <Link to='/test'>Тестовая</Link>
      </header>
      <AppRouter />
    </>
  );
};

export default App;
