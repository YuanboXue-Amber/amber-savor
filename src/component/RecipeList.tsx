import * as React from 'react';
import { IRecipe } from '../strapi/APItypes';
import { CardDeck } from 'react-bootstrap';
import RecipeCard from './RecipeCard';

export interface IRecipeListProps {
  recipeList: IRecipe[]
}

export default function RecipeList ({recipeList}: IRecipeListProps) {
  return (
    <div className='recipes'>
      <CardDeck>
        {recipeList.map(item => {
          const time = item.timeNeeded.cookTime + item.timeNeeded.prepTime + item.timeNeeded.waitTime;
          let displayTime = '';
          if (time < 60) {
            displayTime = `${time}min`;
          } else if (time < 60*12) {
            displayTime = `${time%60 === 0 ? (time/60) : (time/60).toFixed(1)}h`;
          } else {
            displayTime = 'overnight';
          }
          return (
            <RecipeCard
              image={item.images[0]}
              name={item.name}
              url={`/recipes/${item.uid}`}
              numOfingredients={item.ingredients.length}
              minBeforeReady={displayTime}
            />
          )
        })}
      </CardDeck>
    </div>
  );
}
