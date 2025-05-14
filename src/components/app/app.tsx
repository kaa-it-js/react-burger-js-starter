import { Route, Routes, useParams } from 'react-router-dom';

import { AppHeader } from '@components/app-header/app-header.jsx';
import { BurgerConstructor } from '@components/burger-contructor/burger-constructor.jsx';
import { BurgerIngredients } from '@components/burger-ingredients/burger-ingredients.jsx';
import { ingredients } from '@utils/ingredients.js';

import styles from './app.module.css';

const Test = () => {
  const { id } = useParams<{ id?: string }>();

  return <h1>{id}</h1>;
};

export const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <h1
                className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-5`}
                data-testid='header'
              >
                Соберите бургер
              </h1>
              <main className={`${styles.main} pl-5 pr-5`}>
                <BurgerIngredients ingredients={ingredients} />
                <BurgerConstructor ingredients={ingredients} />
              </main>
            </>
          }
        />
        <Route path='/test/:id' element={<Test />} />
      </Routes>
    </div>
  );
};
