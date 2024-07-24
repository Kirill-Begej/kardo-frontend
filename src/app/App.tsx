import './styles/index.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';

const App = () => {
  return (
    <div className={classNames('app', {}, [])}>
      <div className={classNames('wrapper', {}, [])}>
        <AppRouter />
        <div className={classNames('test', {}, [])}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           Sunt, perspiciatis ab voluptatum fugiat reiciendis velit eos
           rem aliquid odit nobis fuga perferendis corporis autem
           impedit quos ea enim et adipisci!</div>
      </div>
    </div>
  );
};

export default App;
