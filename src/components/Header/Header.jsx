import React from 'react';
import Button from '../Button/Button';

const Header = () => {


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