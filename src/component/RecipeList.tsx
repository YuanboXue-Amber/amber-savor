import * as React from 'react';
import { Link } from 'react-router-dom';
import { IRecipe } from '../strapi/APItypes';

export interface IRecipeListProps {
  recipeList: IRecipe[]
}

export default function RecipeList ({recipeList}: IRecipeListProps) {
  return (
    <div>
      <ul className='recipes'>
        {recipeList.map(item => {
          return (
            <li key={item.name} className='recipe'>
              <img src={item.images[0].url} alt={item.images[0].alternativeText}/>
              <Link to={`/recipes/${item.uid}`} className='btn btn-primary product-link'>{item.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
