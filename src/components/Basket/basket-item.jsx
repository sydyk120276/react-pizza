import React from 'react'

function BasketItem({ elem }) {
  return (
    <section className="basket-item">
      <div className="basket-item__container">
        <div className="basket-item__image">
          <img src={elem.img} alt="" />
        </div>
        <div className="basket-item__info info-item">
          <span className="info-item__title">{elem.title}</span>
          <div className="info-item__block">
            <span className="info-item__block-types">{elem.types.type_1}, </span>
            <span className="info-item__block-size">{elem.sizes.size_1}</span>
          </div>
        </div>
        <div className="basket-item__button-group">
          <button>-</button>
          <span>{elem.id}</span>
          <button>+</button>
        </div>
        <span className="basket-item__price">{elem.price}₽</span>
        <div className="basket-item__deleted">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="15" fill="white" stroke="#D7D7D7" strokeWidth="2" />
            <path d="M19.7479 17.9557L17.4993 15.7071L19.7479 13.4585C20.1618 13.0446 20.1618 12.3734 19.7479 11.9595C19.334 11.5455 18.6628 11.5455 18.2488 11.9595L16.0002 14.2081L13.7516 11.9595C13.3377 11.5455 12.6665 11.5455 12.2526 11.9595C11.8386 12.3734 11.8386 13.0446 12.2526 13.4585L14.5012 15.7071L12.2526 17.9557C11.8386 18.3697 11.8386 19.0409 12.2526 19.4548C12.6665 19.8687 13.3377 19.8687 13.7516 19.4548L16.0002 17.2062L18.2488 19.4548C18.6628 19.8687 19.334 19.8687 19.7479 19.4548C20.1618 19.0409 20.1618 18.3697 19.7479 17.9557Z" fill="#D0D0D0" />
          </svg>
        </div>
      </div>
      <div className="basket-item__total">
        <span className="basket-item__total-amount">Всего пицц: 3 шт.</span>
        <span className="basket-item__total-sum">Сумма заказа: <span className="basket-item__total-sum-current">900 ₽</span></span>
      </div>
    </section>
  )
}

export default BasketItem