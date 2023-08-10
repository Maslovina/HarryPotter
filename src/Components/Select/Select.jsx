import React from 'react'
import './Select.css'

export const Select = ({handler}) => {
    return (
      <div className="select_wrapper">
        <p className="school_title">School</p>
        <select className="select_school" onChange={handler}>
          <option value="">All</option>
          <option value="Gryffindor">Gryffindor</option>
          <option valuer="Slytherin">Slytherin</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
        </select>
      </div>
    );
}