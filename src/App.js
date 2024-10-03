import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {
// функция для закрития моего приложения
  useEffect( () => {
    // метод ready сообщает от том что приложение полнорстью отрисовалось/отрендерилось
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      <button onClick={onClose}>Закрити</button>
          <span className={'username'}>
            {tg.initDataUnsafe?.user?.username}
          </span>
          <h1 className="title"></h1>
    </div>

  );
}

export default App;
