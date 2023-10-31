"use client";
import { useState,useEffect } from "react";

async function fetchMealIdeas(ingredient) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;
}

export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);
    
    async function loadMealIdeas(ingredient) {
        const mealsData = await fetchMealIdeas(ingredient);
        setMeals(mealsData || []);
    }

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas(ingredient);
        }
    }, [ingredient]);

    return (
        <div>
            <h1 className="ml-10 text-4xl">Meal Ideas</h1>
            <div className="ml-10 text-yellow-500 text-xl">
            {meals.length === 0 && <p>No meals found</p>}
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
}
