import React from "react";
import styles from "./meals-grid.module.css";
import MealItem from "./meal-item";

const MealsGrid = ({ meals }) => {
  // console.log(meals);
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem meal={meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
