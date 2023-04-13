const recipes = [
  { recipe_name: 'Chicken Fajitas'},
  { recipe_name:  'Egg White Mushroom Omelette'},
  { recipe_name: 'Chicken Ceasar Salad'}
]

const ingredients = [
  { ingredient_name: 'Chicken Breast', ingredient_unit: 'oz'},
  { ingredient_name: 'Bell Peppers', ingredient_unit: 'cups'},
  { ingredient_name: 'Onions', ingredient_unit: 'cups'},
  { ingredient_name: 'Mushrooms', ingredient_unit: 'cups'},
  { ingredient_name: 'Eggs Whites', ingredient_unit: 'cups'},
  { ingredient_name: 'Romaine Lettuce', ingredient_unit: 'cups'},
  { ingredient_name: 'Cheese', ingredient_unit: 'grams'},
  { ingredient_name: 'Croutons', ingredient_unit: 'grams'},
  { ingredient_name: 'Ceasar Dressing', ingredient_unit: 'mls'}
]

const steps_ingredients = [
  //chicken fajitas
  { step_id: 2, ingredient_id: 1, quantity: 6 },
  { step_id: 3, ingredient_id: 3, quantity: 1 },
  { step_id: 4, ingredient_id: 2, quantity: 1 },
  //egg white mushroom omelette
  { step_id: 7, ingredient_id: 4, quantity: 1/2 },
  { step_id: 9, ingredient_id: 5, quantity: 1 },
  //chicke ceasar salad
  { step_id: 12, ingredient_id: 1, quantity: 6 },
  { step_id: 13, ingredient_id: 6, quantity: 3 },
  { step_id: 14, ingredient_id: 7, quantity: 30 },
  { step_id: 15, ingredient_id: 8, quantity: 30 },
  { step_id: 16, ingredient_id: 9, quantity: 60 },
]

const steps = [
  //chicken fajitas
  { step_instruction: 'Preheat two pans', step_number: 1, recipe_id: 1 },
  { step_instruction: 'Place the chicken in 1 pan and season to personal taste.', step_number: 2, recipe_id: 1 },
  { step_instruction: 'Place onions to second pan ', step_number: 3, recipe_id: 1 },
  { step_instruction: 'Add bell peppers to second pan ', step_number: 4, recipe_id: 1 },
  { step_instruction: 'Once chicken and vegetables are cooked, Add vegetables to chicken and enjoy', step_number: 5, recipe_id: 1 },
  //egg white mushroom omelette
  { step_instruction: 'Preheat pan', step_number: 1, recipe_id: 2 },
  { step_instruction: 'Place mushrooms in pan and season to taste', step_number: 2, recipe_id: 2 },
  { step_instruction: 'Once mushrooms are cooked take them off the pan and place in a bowl', step_number: 3, recipe_id: 2 },
  { step_instruction: 'On the same pan pour egg whites, allow to cook for 5 mins before placing vegetables in the center', step_number: 4, recipe_id: 2 },
  { step_instruction: 'Flip the ends of the egg whites inward and enjoy', step_number: 5, recipe_id: 2 },
  //chicken ceasar salad
  { step_instruction: 'Preheat a pan', step_number: 1, recipe_id: 3 },
  { step_instruction: 'Add chicken and cook throughly, season to taste', step_number: 2, recipe_id: 3 },
  { step_instruction: 'In a bowl place cut Romaine lettuce and cooked chicken', step_number: 3, recipe_id: 3 },
  { step_instruction: 'Add cheese', step_number: 4, recipe_id: 3 },
  { step_instruction: 'Add croutons', step_number: 5, recipe_id: 3 },
  { step_instruction: 'Add dressing to personal liking and enjoy', step_number: 6, recipe_id: 3 },
]



exports.seed = async function(knex) {
  await knex('recipes').insert(recipes)
  await knex('ingredients').insert(ingredients)
  await knex('steps').insert(steps)
  await knex('steps_ingredients').insert(steps_ingredients)
}