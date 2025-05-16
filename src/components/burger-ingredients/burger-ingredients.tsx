import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-ingredients.module.css';

import type { TIngredient } from '@/utils/types';

type TBurgerIngredientsProps = {
  ingredients: TIngredient[];
};

export const BurgerIngredients = ({ ingredients }: TBurgerIngredientsProps) => {
  console.log(ingredients);

  return (
    <section className={styles.burger_ingredients}>
      <nav>
        <ul className={styles.menu}>
          <Tab
            value='bun'
            active={true}
            onClick={() => {
              /* TODO */
            }}
          >
            Булки
          </Tab>
          <Tab
            value='main'
            active={false}
            onClick={() => {
              /* TODO */
            }}
          >
            Начинки
          </Tab>
          <Tab
            value='sauce'
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
