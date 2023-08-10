import React from 'react'
import './Card.css'

export const Card = ({img,name,actor,gender,house,wand,alive,id,item}) => {
  return (
    <div className="card" key={id} item={item}>
      <div className="image">
        <img className='img' src={img} alt={name} />
      </div>
      <div className="card_info">
              <p className="info_title">{ name }</p>
        <ul className="list_info">
          <li>Actor: {actor}</li>
          <li>Gender: {gender}</li>
          <li>House: {house}</li>
          <li>Wand core: {wand}</li>
          <li>Alive: {alive}</li>
        </ul>
      </div>
    </div>
  );
}
