import React from 'react';
import Header from "./Header";


interface IWrapper {
  children: React.ReactChildren | React.ReactNode
}

const Wrapper = ({children}: IWrapper) => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <Header/>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
