import { useEffect } from 'react';
import { useTelegram } from './components/hooks/useTelegram';
import './App.css';
import Header from './components/Header/Header'
import {Route, Routes} from 'react-router-dom'
import ProductList from './components/ProductList/ProductList'
import Form from '../src/components/Form/Form'
// const tg = window.Telegram.WebApp;

function App() {

  const {onToggleButton, tg} = useTelegram();

  useEffect( () => {
    // метод ready сообщает от том что приложение полнорстью отрисовалось/отрендерилось
    tg.ready();
  }, [])

  // const onClose = () => {
  //   tg.close()
  // }

  return (
    <div className="App">
      <Header/>
      {/* <button onClick={onClose}>Закрити</button>
          <span className={'username'}>
            {tg.initDataUnsafe?.user?.username}
          </span> */}
          <Routes>
        <Route index element={ <ProductList />}/>
        <Route path={'form'} element={ <Form />}/>
          </Routes>
    </div>

  );
}

export default App;
