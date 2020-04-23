import * as React from 'react';
import CategoryList from '../component/CategoryList';
import { Context } from '../context/ContextProvider';
import Loading from '../component/Loading';
import RecipeCarousel from '../component/RecipeCarousel';

export interface IHomeProps {
}

export default function Home (props: IHomeProps) {
  const context = React.useContext(Context);
  const {loading, recipeList, categoryList, modifyContext} = context;

  React.useEffect(() => {
    modifyContext.getRecipes('all');
  }, [modifyContext])

  if (loading)
    return (<Loading />);

  const newRecipes = recipeList
    .sort((a, b) => (new Date(b.updatedAt)).getTime() - (new Date(a.updatedAt)).getTime())
    .slice(0, 3);
  return (
    <div>
      <RecipeCarousel featuredRecipes={newRecipes} />
      <CategoryList categoryList={categoryList}/>
    </div>
  );
}
