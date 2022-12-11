import React, { useState } from "react";
import "./styles.css";

const diffCuisine = {
  southIndian: [
    { name: "Dosa", rating: "4.5/5" },
    { name: "Idly", rating: "4.5/5" },
    { name: "Upma", rating: "3.9/5" }
  ],
  northIndian: [
    { name: "ButterChicken", rating: "4.2/5" },
    { name: "chole", rating: "4.5/5" },
    { name: "panipuri", rating: "3.9/5" }
  ],
  asian: [
    { name: "Dumplings", rating: "4/5" },
    { name: "Tempura", rating: "4/5" },
    { name: "Thai fish curry", rating: "4.2/5" }
  ]
};

export default function App() {
  const [selectedCuisine, setCuisine] = useState("southIndian");

  function onClickEvent(dish) {
    return setCuisine(dish);
  }

  return (
    <div className="App">
      <h1>{"😋"}Rating Cuisine</h1>

      <p>Check my ratings on various food. Select a genre to get started</p>
      <div>
        {Object.keys(diffCuisine).map((dish) => (
          <button
            style={{
              padding: "0.4rem",
              margin: "0.5rem",
              borderRadius: "0.5rem",
              fontSize: "large",
              cursor: "pointer"
            }}
            onClick={() => onClickEvent(dish)}
            key={dish}
          >
            {dish}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ listStyle: "none", paddingInlineStart: "0" }}>
          {diffCuisine[selectedCuisine].map(function (food) {
            return (
              <li
                style={{
                  border: "1px solid rgb(209, 213, 219)",
                  margin: "0.2rem",
                  width: "60%",
                  fontSize: "large",
                  padding: "1rem",
                  fontWeight: 500
                }}
                key={food.name}
              >
                <div style={{ fontSize: "normal" }}>{food.name}</div>
                <div style={{ fontSize: "small" }}>{food.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
