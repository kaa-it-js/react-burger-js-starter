import * as PropTypes from 'prop-types';
import React from 'react';

import { ingredientPropType } from '@utils/prop-types.js';

import styles from './burger-constructor.module.css';

export const BurgerConstructor = ({ ingredients }) => {
  console.log(ingredients);

  return <section className={styles.burger_constructor}></section>;
};

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
};
