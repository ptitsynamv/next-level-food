import MealItem from '../meal-item/meal-item';
import s from './meals-grid.module.css';

export default function MealsGrid({ meals }) {
  return (
    <ul className={s.meal}>
      {meals.map((meal) => {
        return (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        );
      })}
    </ul>
  );
}
