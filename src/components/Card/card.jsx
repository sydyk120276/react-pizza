import React from 'react'

const Card = ({ item }) => {
  return (
    <section className="card">
      <div className="card__container">
        <div className="card__item">
          <div>{item.img}</div>
          <span>{item.title}</span>
          <div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Card
