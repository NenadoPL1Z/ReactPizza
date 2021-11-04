import React, {FC} from 'react';
import Wrapper from "../components/Wrapper";
import BasketList from "../components/Basket/BasketList";
import BasketPlaceholder from "../components/Basket/BasketPlaceholder";

const Basket: FC = () => {


  return (
    <Wrapper>
      <section className='basket'>
        {''.length ? <BasketList/> : <BasketPlaceholder/>}
      </section>
    </Wrapper>
  );
};

export default Basket;
