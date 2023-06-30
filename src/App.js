import React from 'react';
import './App.css';

const TopHeader = () => {

  const getCurrentTime = () => {
    const date = new Date();
    const time = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    const formattedDate = date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return `${time} - ${formattedDate}`;
  };

  return (
    <div className="header">
      <div className="header">
        <h1 className="header-title">Dashboard</h1>
        <div className="greeting">
          <p>Hi, Daniel</p>
          <p>{getCurrentTime()}</p>
        </div>
      </div> 
    </div>
  );
};

const App = () => {
  const cardsData = [
    {
      id: 0,
      title: 'Personal Website',
      image: '/website.png',
      link: 'http://website.danials.space/',
    },
    {
      id: 1,
      title: 'Terminal',
      image: '/terminal.png',
      link: 'http://terminal.danials.space/',
    },
    {
      id: 2,
      title: 'The Countdown',
      image: '/countdown.png',
      link: 'https://countdown.danials.space/',
    },
  ];

  return (
    <div  >
      <TopHeader />
    <div className="app">
      
      {cardsData.map((card) => (
        <a key={card.id} href={card.link} className="card">
          <img src={card.image} alt="Card Image" className="card-image" />
          <h3 className="card-title">{card.title}</h3>
        </a>
      ))}
    </div>
    </div>
  );
};

export default App;
