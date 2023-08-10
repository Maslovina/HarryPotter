import React from 'react'
import "./Header.css"

export const Header = ({children}) => {
    return (
      <header>
        <div className="container">
          <div className="header_wrapper">
            <h1 className="header_title">Harry Potter</h1>
            <p className="header_subtitle">
              View all characters from the Harry Potter universe.
            </p>
            {children}
          </div>
        </div>
      </header>
    );
}