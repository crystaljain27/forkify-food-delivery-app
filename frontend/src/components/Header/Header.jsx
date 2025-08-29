import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Your next meal, just a tap away</h2>
        <p>
          Explore a world of flavors with our curated selection of restaurants
          and dishes. From quick bites to gourmet meals, Forkify delivers
          quality food right to your doorstep. Your craving, satisfied.
        </p>

        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
