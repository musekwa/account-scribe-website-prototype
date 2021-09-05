import React from 'react'
import CardItem from './CardItem/CardItem';
import './cards.css';

function Cards() {
    return (
      <div className="cards">
        <h1>Our Services</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="/images/img-9.jpg"
                text="loreum ipsum lorem ipsum loreum ipsum lorem ipsum loreum ipsum lorem ipsum"
                label="Accounting"
                path="/accounting"
              />
              <CardItem
                src="/images/img-8.jpg"
                text="loreum ipsum lorem ipsum loreum ipsum lorem ipsum loreum ipsum lorem ipsum"
                label="Book-keeping"
                path="/book-keeping"
              />
            </ul>
            
          </div>
        </div>
      </div>
    );
}
export default Cards;
