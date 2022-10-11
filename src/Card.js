import React from 'react'

const Card = ({user}) => {
  const {id,name,designation,image,rating,reviews,about} = user;
    return (
    <section className='card-content'>
        <img src={image} alt={name} />
        <div>
          <div className='card-head'>
              <h2>{name}</h2>
              <h4>{designation}</h4>
          </div>
          <p>Ratings : {rating}</p>
          <p>Reviews : {reviews}</p>
          <div className='card-about'>
          {about}
        </div>
        </div>
    </section>
    )
  }

export default Card;
