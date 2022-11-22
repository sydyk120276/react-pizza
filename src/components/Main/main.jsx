import React from 'react'

import Cards from '../Cards/cards';

const Main = () => {
  return (
    <section className="main">
      <div className="main__container">
        <span className="main__title">Все пиццы</span>
        <div className="main__body">
          <Cards/>
        </div>
      </div>
    </section>
  );
}

export default Main
