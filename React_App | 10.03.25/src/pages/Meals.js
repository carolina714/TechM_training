import React, { useState, useEffect } from "react";
import axios from "axios";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=salad")
      .then(response => setMeals(response.data.meals || []))
      .catch(error => console.error("Error fetching meals:", error));
  }, []);

  return (
    <div>
      <h2>Meal Plans</h2>
      <div className="row">
        {meals.map(meal => (
          <div key={meal.idMeal} className="col-md-4">
            <div className="card mb-3">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{meal.strMeal}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
