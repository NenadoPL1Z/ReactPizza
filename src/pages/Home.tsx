import React from 'react';
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Filter from "../components/Home/Filter";
import PizzaList from "../components/Home/PizzaList";

const Home = () => {
  return (
    <div>
      <Wrapper>
        <Filter/>
        <PizzaList/>
      </Wrapper>
    </div>
  );
};

export default Home;
