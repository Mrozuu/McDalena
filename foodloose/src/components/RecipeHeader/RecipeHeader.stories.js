import React from 'react';
import { storiesOf } from '@storybook/react';
import appetizer from 'assets/icons/plate.svg';
import main from 'assets/icons/pot.svg';
import dessert from 'assets/icons/dessert.svg';
import RecipeHeader from './RecipeHeader';

storiesOf('RecipeHeader', module)
  .add('Appetizer', () => <RecipeHeader title="jajko z boczkiem" type={appetizer} />)
  .add('Main', () => <RecipeHeader title="kotlet schabowy z ziemniakami" type={main} />)
  .add('Dessert', () => <RecipeHeader title="szarlotka z lodami" type={dessert} />);
