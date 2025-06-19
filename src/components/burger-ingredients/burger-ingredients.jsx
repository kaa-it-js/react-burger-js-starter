import { Tab } from '@krgaa/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

import { ingredientPropType } from '@utils/prop-types';

import styles from './burger-ingredients.module.css';

export const BurgerIngredients = ({ ingredients }) => {
  console.log(ingredients);

  return (
    <section className={styles.burger_ingredients}>
      <nav>
        <ul className={styles.menu}>
          <Tab
            value="bun"
            active={true}
            onClick={() => {
              /* TODO */
            }}
          >
            Булки
          </Tab>
          <Tab
            value="main"
            active={false}
            onClick={() => {
              /* TODO */
            }}
          >
            Начинки
          </Tab>
          <Tab
            value="sauce"
            active={false}
            onClick={() => {
              /* TODO */
            }}
          >
            Соусы
          </Tab>
        </ul>
      </nav>
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
};
