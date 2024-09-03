import React from 'react';

const Header = () => {
    return (
        <div className={'header'}>
          <button>close</button>
          <span className={'username'}>
            {tg.initDataUnsafe}
          </span>
        </div>
    );
};

export default Header;