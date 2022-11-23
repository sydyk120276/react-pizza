import React from 'react'

import Card from '../Card/card';

const Main = ({ items, setCount, count }) => {
  return (
    <section className="main">
      <div className="main__container">
        <span className="main__title">Все пиццы</span>
        <div className="main__body">
          {items.map((item) => {
            const idItem = items.find((el) => el.id === item.id)
            return <Card key={item.id} item={item} idItem={idItem.id} setAmount={setCount} amount={count} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Main
