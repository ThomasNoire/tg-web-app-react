import React from 'react';
import Button from '../Button/Button';
import { useTelegram } from './components/hooks/useTelegram';
import Header from '../../components/Header/Header.css'

const Header = () => {
  const {user, onClose} = useTelegram()

    return (
        <div className={'header'}>
          <Button onClick={onClose}>close button</Button>
          <span className={'username'}>
            {tg.initDataUnsafe?.user?.username}
          </span>
        </div>
    );
};

export default Header;