import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Ribeye Steak',
    description: 'A combination of tender meat and juicy fat',
    price: 49.99,
  },
  {
    id: 'm2',
    name: 'Cowboy Burger',
    description: 'Beef, crispy onions, bacon and cheese',
    price: 12.5,
  },
  {
    id: 'm3',
    name: 'Pepperoni pizza',
    description: 'Italian sausage, mushrooms and onions',
    price: 18.99,
  },
  {
    id: 'm4',
    name: 'Sashimi Bowl',
    description: 'Fresh salmon and tuna',
    price: 24.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;