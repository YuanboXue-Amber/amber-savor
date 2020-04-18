import * as React from 'react';
import { useParams } from 'react-router-dom';

export interface IRecipeDetailsProps {
}

export default function RecipeDetails (props: IRecipeDetailsProps) {
  const {recipeName} = useParams();
  console.log(recipeName);

  return (
    <div>
      this is one recipe of name: {recipeName}
    </div>
  );
}
