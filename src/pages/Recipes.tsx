import * as React from 'react';
import { useParams } from 'react-router-dom';

export interface IRecipesProps {
}

export default function Recipes (props: IRecipesProps) {
  const {tag} = useParams();
  console.log(tag);

  return (
    <div>
      this is a list of recipes of tag: {tag}
    </div>
  );
}
