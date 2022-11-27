import React from 'react'

import Card from '../Card/card';

const Main = ({
  items,
  setCount,
  count,
  activeButton,
  onClickAmountButton,
}) => {

  return (
    <section className="main">
      <div className="main__container">
        <span className="main__title">Все пиццы</span>
        <div className="main__body">
          {items.map((item) => {
                const basketItem = items.find((el) => el.id === item.id);
            return (
              <Card
                key={item.id}
                item={item}
                basketItem={basketItem}
                setAmount={setCount}
                amount={count}
                activeButton={activeButton}
                onClickAmountButton={onClickAmountButton}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Main
