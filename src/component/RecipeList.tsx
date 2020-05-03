import * as React from 'react';
import { IRecipe } from '../strapi/APItypes';
import { CardDeck } from 'react-bootstrap';
import RecipeCard from './RecipeCard';
import { convertMinToDisplay } from '../utils/timeConvertor';

export interface IRecipeListProps {
  recipeList: IRecipe[]
}

export default function RecipeList ({recipeList}: IRecipeListProps) {
  return (
    <div className='recipes'>
      <CardDeck>
        {recipeList.map(item => {
          const time = item.timeNeeded.cookTime + item.timeNeeded.prepTime + item.timeNeeded.waitTime;
          const displayTime = convertMinToDisplay(time);
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
