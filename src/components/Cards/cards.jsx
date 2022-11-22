import React from 'react'

import pizza1 from "../../image/pizza_1.png";
import pizza2 from "../../image/pizza_2.png";
import pizza3 from "../../image/pizza_3.png";
import pizza4 from "../../image/pizza_4.png";
import Card from "../Card/card";

const Cards = () => {
  console.log(pizza1)

  const items = [
    {
      id: 1,
      title: "Чизбургер-пицца",
      price: 495,
      img: pizza1
    },
    {
      id: 2,
      title: "Сырная",
      price: 395,
      img: pizza2
    },
    {
      id: 3,
      title: "Креветки по-азиатски",
      price: 295,
      img: pizza3
    },
    {
      id: 4,
      title: "Сырный цыпленок",
      price: 595,
      img: pizza4
    },
  ];

  return (
    <section className="cards">
      <div className="cards__container">
        <div className="cards__body">
          {items.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Cards
