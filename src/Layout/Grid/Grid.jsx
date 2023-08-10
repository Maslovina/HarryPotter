import React from 'react'
import './Grid.css'

export const Grid = ({handler,children}) => {
    return (
      <div className="container">
        <div handler={handler} className="card_list">
          {children}
        </div>
      </div>
    );
}
