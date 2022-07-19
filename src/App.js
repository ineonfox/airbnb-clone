import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import cardData from './cardData';

export default function App() {
  const cardElements = cardData.map(card => {
    return <Card 
      img={card.img}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      country={card.location}
      title={card.title}
      price={card.price}
    />
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="card-row">
        {cardElements}
      </div>
    </div>
  );
}
