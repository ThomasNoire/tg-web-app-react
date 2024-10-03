import { useEffect } from 'react';
import { useTelegram } from './components/hooks/useTelegram';
import './App.css';
import Header from './components/Header/Header'


const tg = window.Telegram.WebApp;

function App() {

  const {onToggleButton, tg} = useTelegram();

  useEffect( () => {
    // метод ready сообщает от том что приложение полнорстью отрисовалось/отрендерилось
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      <Header/>
      <button onClick={onClose}>Закрити</button>
          <span className={'username'}>
            {tg.initDataUnsafe?.user?.username}
          </span>
          <h1 className="title"></h1>
    </div>

  );
}

export default App;
