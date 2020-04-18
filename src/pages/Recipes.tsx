import * as React from 'react';
import { useParams } from 'react-router-dom';

export interface IRecipesProps {
}

export default function Recipes (props: IRecipesProps) {
  const {categoryName} = useParams();
  console.log(categoryName);

  return (
    <div>
      this is a list of recipes of categoryName: {categoryName}
    </div>
  );
}
