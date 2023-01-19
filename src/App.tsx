import { Counter } from './components/Counter';
import sheep from './assets/img/sheep.webp';

import 'react-toastify/dist/ReactToastify.css';

import './App.scss';

export const App = () => {
  return (
    <main>
      <div className="container">
        <h1>Ready to launch Dumba in</h1>

        <Counter />

        <p>Holy get together in the honor of Dumba</p>
      </div>

      <img src={sheep} alt="" width={500} />
    </main>
  );
};
