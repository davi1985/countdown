import { Counter } from './components/Counter';
import rocketSvg from './assets/img/rocket.svg';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import './App.scss';

export const App = () => {
  const notify = () =>
    toast.info('Inscrição confirmada com sucesso!', {
      closeButton: false,
      theme: 'colored',
    });

  return (
    <main>
      <div className="container">
        <h1>Ready to launch in...</h1>

        <Counter />

        <p>Inscreva-se para saber mais sobre o lançamento</p>

        <button onClick={notify}>Inscreva-se</button>

        <ToastContainer
          theme="dark"
          position="top-center"
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
        />
      </div>

      <img src={rocketSvg} alt="" width={500} />
    </main>
  );
};
