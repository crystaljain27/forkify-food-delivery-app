import React from 'react';
import './AnimatedFoodBackground.css';

const AnimatedFoodBackground = () => {
  return (
    <div className="background-container">
      {/* You can add as many icons as you like. Find SVG icons and paste them here. */}
      {/* Icon 1: Pizza Slice */}
      <div className="food-icon" style={{ left: '10%', top: '20%', animationDuration: '15s' }}>
        <svg /* SVG code for a pizza slice */ width="80" height="80" viewBox="0 0 24 24" fill="rgba(255, 204, 153, 0.7)" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.93V14h-4.07c.28-2.3.99-4.38 2.07-6.07l2 3.46v4.54zm2 0v-4.54l2-3.46c1.08 1.69 1.79 3.77 2.07 6.07H13zm6.07-8.07c-.7-2.02-1.95-3.79-3.57-5.07l-2.5 4.33H19.5c.19.58.3 1.18.4 1.74zm-12.14 0c.1-.56.21-1.16.4-1.74h4.5l-2.5-4.33C4.98 5.86 3.73 7.63 3.03 9.65z"/></svg>
      </div>

      {/* Icon 2: Burger */}
      <div className="food-icon" style={{ left: '80%', top: '50%', animationDuration: '20s', animationDelay: '5s' }}>
        <svg /* SVG code for a burger */ width="60" height="60" viewBox="0 0 24 24" fill="rgba(255, 153, 102, 0.7)" xmlns="http://www.w3.org/2000/svg"><path d="M2 15.5C2 17.43 3.57 19 5.5 19h13c1.93 0 3.5-1.57 3.5-3.5V14H2v1.5zm18.5-2H3.5A1.5 1.5 0 012 12V10h20v2a1.5 1.5 0 01-1.5 1.5zM12 4C7.58 4 4 5.79 4 8h16c0-2.21-3.58-4-8-4z"/></svg>
      </div>
      
      {/* Icon 3: Fries */}
      <div className="food-icon" style={{ left: '50%', top: '80%', animationDuration: '18s', animationDelay: '2s' }}>
        <svg /* SVG code for french fries */ width="70" height="70" viewBox="0 0 24 24" fill="rgba(255, 224, 102, 0.7)" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 4h-1.8l-1.6 8H17l1.5-8zM9.5 4H7.7L6.1 12H8l1.5-8zM14 4h-1.8l-1.6 8h1.9l1.5-8zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8.9 16.5l-2-8h.7l1.6 8h-.3zm4.6 0l-2-8h.7l1.6 8h-.3zm4.6 0l-2-8h.7l1.6 8h-.3z"/></svg>
      </div>

       {/* Icon 4: Drink */}
      <div className="food-icon" style={{ left: '20%', top: '75%', animationDuration: '22s', animationDelay: '8s' }}>
        <svg /* SVG code for a drink */ width="50" height="50" viewBox="0 0 24 24" fill="rgba(153, 204, 255, 0.7)" xmlns="http://www.w3.org/2000/svg"><path d="M21 5H3L2 19h20L21 5zM9 12H7V7h2v5zm4 0h-2V7h2v5zm4 0h-2V7h2v5z" /></svg>
      </div>

      {/* Icon 5: Ice Cream */}
       <div className="food-icon" style={{ left: '90%', top: '10%', animationDuration: '13s', animationDelay: '1s' }}>
        <svg /* SVG code for ice cream */ width="65" height="65" viewBox="0 0 24 24" fill="rgba(255, 182, 193, 0.7)" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c-3.31 0-6 2.69-6 6 0 2.38 1.38 4.44 3.38 5.45L12 22l2.62-8.55C16.62 12.44 18 10.38 18 8c0-3.31-2.69-6-6-6z" /></svg>
      </div>
    </div>
  );
};

export default AnimatedFoodBackground;

