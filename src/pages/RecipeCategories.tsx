import * as React from 'react';
import CategoryList from '../component/CategoryList';
import { Context } from '../context/ContextProvider';
import Loading from '../component/Loading';

export interface IRecipeCategoriesProps {
}

export default function RecipeCategories (props: IRecipeCategoriesProps) {
  const context = React.useContext(Context);
  const {loading, categoryList} = context;

  if (loading)
    return (<Loading />);

  return (
    <div>
      <br />
      <CategoryList categoryList={categoryList}/>
    </div>
  );
}
