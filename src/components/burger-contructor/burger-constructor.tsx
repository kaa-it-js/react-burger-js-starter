import styles from './burger-constructor.module.css';

import type { TIngredient } from '@/utils/types';

type TBurgerConstructorProps = {
  ingredients: TIngredient[];
};

export const BurgerConstructor = ({ ingredients }: TBurgerConstructorProps) => {
  console.log(ingredients);

  return <section className={styles.burger_constructor}></section>;
};
