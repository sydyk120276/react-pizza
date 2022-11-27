import React, { useState } from 'react'

import Header from '../Header/header';
import Menu from '../Menu/menu';
import Main from '../Main/main';

const items = [
  {
    id: 1,
    title: "Чизбургер-пицца",
    price: 495,
    amount: 0,
    sizes: {
      size_1: 26,
      size_2: 30,
      size_3: 40,
    },
    types: {
      type_1: 'тонкое',
      type_2: 'традиционное'
    },
    img: 'https://tick-time.ru/images/products/mini/5603586f-7198-41f5-8861-320a7ddc9593.png'
  },
  {
    id: 2,
    title: "Сырная",
    price: 395,
    amount: 0,
    sizes: {
      size_1: 26,
      size_2: 30,
      size_3: 40,
    },
    types: {
      type_1: 'тонкое',
      type_2: 'традиционное'
    },
    img: 'https://tick-time.ru/images/products/mini/1ab97630-f588-421a-8af7-ece3d49cf2aa.png'
  },
  {
    id: 3,
    title: "Креветки по-азиатски",
    price: 295,
    amount: 0,
    sizes: {
      size_1: 26,
      size_2: 30,
      size_3: 40,
    },
    types: {
      type_1: 'тонкое',
      type_2: 'традиционное'
    },
    img: 'https://tick-time.ru/images/products/mini/934ffc0d-8206-41ad-8551-b522a43d3c13.png'
  },
  {
    id: 4,
    title: "Сырный цыпленок",
    price: 595,
    amount: 0,
    sizes: {
      size_1: 26,
      size_2: 30,
      size_3: 40,
    },
    types: {
      type_1: 'тонкое',
      type_2: 'традиционное'
    },
    img: 'https://tick-time.ru/images/products/mini/5603586f-7198-41f5-8861-320a7ddc9593.png'
  },
  {
    id: 5,
    title: "Сырный",
    price: 595,
    amount: 0,
    sizes: {
      size_1: 26,
      size_2: 30,
      size_3: 40,
    },
    types: {
      type_1: 'тонкое',
      type_2: 'традиционное'
    },
    img: 'https://tick-time.ru/images/products/mini/5603586f-7198-41f5-8861-320a7ddc9593.png'
  },
  {
    id: 6,
    title: "цыпленок",
    price: 595,
    amount: 0,
    sizes: {
      size_1: 26,
      size_2: 30,
      size_3: 40,
    },
    types: {
      type_1: 'тонкое',
      type_2: 'традиционное'
    },
    img: 'https://tick-time.ru/images/products/mini/5603586f-7198-41f5-8861-320a7ddc9593.png'
  },
  {
    id: 7,
    title: "Креветки",
    price: 595,
    amount: 0,
    sizes: {
      size_1: 26,
      size_2: 30,
      size_3: 40,
    },
    types: {
      type_1: 'тонкое',
      type_2: 'традиционное'
    },
    img: 'https://tick-time.ru/images/products/mini/5603586f-7198-41f5-8861-320a7ddc9593.png'
  },
  {
    id: 8,
    title: "Чизбургер",
    price: 595,
    amount: 0,
    sizes: {
      size_1: 26,
      size_2: 30,
      size_3: 40,
    },
    types: {
      type_1: 'тонкое',
      type_2: 'традиционное'
    },
    img: 'https://tick-time.ru/images/products/mini/5603586f-7198-41f5-8861-320a7ddc9593.png'
  },
];

const Home = () => {
  const [count, setCount] = useState(0)
  const [activeButton, setActiveButton] = useState(false);
  const [itemCounttt, setItemCoundttt] = useState(items);

    const onClickAmountButton = (id) => {
      setActiveButton(true);
      setCount(count + 1);
      const amoutBasket = items
        .map((elem) => {
          if (elem.id === id) {
            elem.amount++;
          }
          return elem;
        })
        .filter((item) => item.amount > 0);
      setItemCoundttt(amoutBasket);
      localStorage.setItem("hello", JSON.stringify(amoutBasket));

    };

    console.log("itemCounttt", itemCounttt);
    console.log("count", count);

  return (
    <div className="home">
      <div className="home__container">
        <Header count={count} />
        <Menu />
        <Main
          items={items}
          count={count}
          activeButton={activeButton}
          onClickAmountButton={onClickAmountButton}
        />
      </div>
    </div>
  );
}

export default Home
