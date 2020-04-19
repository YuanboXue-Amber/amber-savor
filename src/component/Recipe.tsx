import * as React from 'react';
import { IRecipe } from '../strapi/APItypes';

export interface IRecipeProps {
  recipe: IRecipe
}

export default function Recipe ({recipe}: IRecipeProps) {
  return (
    <div>
      <ul className='recipes'>
        <h4>{recipe.name}</h4>
        {
          recipe.images.map(image => {
            return (
              <li key={image.name} className='recipe'>
                <img src={image.url} alt={image.alternativeText}/>
              </li>
            )
          })
        }
        <h4>instructions</h4>
        {
          recipe.instructions.map(instruction => {
            return instruction.images.map(image => {
              return (
                <li key={image.name} className='recipe'>
                  <img src={image.url} alt={image.alternativeText}/>
                </li>
              );
            });
          })
        }
      </ul>
    </div>
  );
}
