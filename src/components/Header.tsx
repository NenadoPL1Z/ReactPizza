import React, {FC} from 'react';
import LogoIcon from "../UI/svg/LogoIcon";
import {useHistory} from "react-router-dom";

const Header: FC = () => {

  const router = useHistory();
  const {location: {pathname}, push} = router;

  return (
    <section className='wrapper-header'>
      <div className='logo' onClick={() => push('/')}>
        <LogoIcon/>
        <div className='logo__text'>
          <h1 className='logo__title'>React-Redux Pizza</h1>
          <h5 className='logo__subtitle'>самая вкусная пицца во вселенной</h5>
        </div>
      </div>
      {pathname === '/' &&
      <button className='buy-button' onClick={() => push('/basket')}>
        <div className='buy-button__block'>
          <h4 className='buy-button__prise'>520 &#8381;</h4>
          <h4 className='buy-button__counter'>3</h4>
        </div>
      </button>}
    </section>
  );
};

export default Header;
