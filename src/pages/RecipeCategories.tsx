import * as React from 'react';
import CategoryList from '../component/CategoryList';

export interface IRecipeCategoriesProps {
}

export default function RecipeCategories (props: IRecipeCategoriesProps) {
  return (
    <div>
      here are many categories, chicken, beef, pork...
      <CategoryList />
    </div>
  );
}
