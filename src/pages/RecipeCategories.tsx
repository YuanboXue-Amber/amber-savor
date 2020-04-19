import * as React from 'react';
import CategoryList from '../component/CategoryList';
import { Context } from '../context/ContextProvider';

export interface IRecipeCategoriesProps {
}

export default function RecipeCategories (props: IRecipeCategoriesProps) {
  const context = React.useContext(Context);
  const {loading, categoryList} = context;

  if (loading)
    return (<h2 className='section-title'>Loading...</h2>);

  return (
    <div>
      here are many categories, chicken, beef, pork...
      <CategoryList categoryList={categoryList}/>
    </div>
  );
}
