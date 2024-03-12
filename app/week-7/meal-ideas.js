"use-client";


import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
  console.log("ingredients: ", ingredient);
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals;
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  // const loadMealIdeas = async () => {
  //   try {
  //     const mealIdeas = await fetchMealIdeas(ingredient);
  //     setMeals(mealIdeas);
  //   } catch (error) {
  //     console.error('Error fetching meal ideas:', error);
  //     setMeals([]); 
  //   }
  // };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className='txl font-bold'>Meal Ideas</h2>
      <ul>
        {meals && meals.map((meal) => ( 
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul> 
    </div>
  );
};

export default MealIdeas;

// const MealIdeas = ({ ingredient }) => {
//   const [meals, setMeals] = useState([]);

//   useEffect(() => {
//     const fetchMealIdeas = async () => {
//       try {
//         console.log('Fetching meal ideas for ingredient:', ingredient);
//         const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch meal ideas');
//         }
        
//         const data = await response.json();
//         console.log('Received meal ideas:', data.meals);
//         setMeals(data.meals || []);
//       } catch (error) {
//         console.error('Error fetching meal ideas:', error.message);
//         setMeals([]);
//       }
//     };

//     fetchMealIdeas(); // Call the function to fetch meal ideas
//   }, [ingredient]);

  
// };


  

//   return (
//     <div>
//       <h2>Meal Ideas</h2>
//       <ul>
//         {meals.map((meal) => (
//           <li key={meal.idMeal}>{meal.strMeal}</li>
//         ))}
//       </ul>
//     </div>
//   );


// export default MealIdeas;

