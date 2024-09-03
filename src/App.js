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
    tg.сlose()
  }

  return (
    <div className="App">
  <h1></h1> 
      <button onClick={onClose}>Закрити</button>
    </div>
  );
}

export default App;
