import * as React from 'react';
import { useParams } from 'react-router-dom';
import RecipeList from '../component/RecipeList';
import { Context } from '../context/ContextProvider';
import Loading from '../component/Loading';
import Title from '../component/Title';

export default function Recipes () {
  const {categoryUID} = useParams();
  const context = React.useContext(Context);
  const {loading, recipeList, modifyContext} = context;

  React.useEffect(() => {
    modifyContext.getRecipes(categoryUID);
  }, [categoryUID, modifyContext])

  if (loading)
    return (<Loading />);

  if (recipeList.length <= 0) {
    return (
      <div>
        no recipe found of categoryUID: {categoryUID}
      </div>
    );
  }

  return (
    <div>
      <Title name={categoryUID?.replace(/-/g, ' ') || 'Recipes'} />
      <RecipeList recipeList={recipeList}/>
    </div>
  );
}
