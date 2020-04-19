import * as React from 'react';
import { useParams } from 'react-router-dom';
import Recipe from '../component/Recipe';
import { Context } from '../context/ContextProvider';

export interface IRecipeDetailsProps {
}

export default function RecipeDetails (props: IRecipeDetailsProps) {
  const {recipeUID} = useParams();
  const context = React.useContext(Context);
  const {loading, recipe, modifyContext} = context;

  React.useEffect(() => {
    modifyContext.getOneRecipe(recipeUID);
  }, [recipeUID, modifyContext])

  if (loading)
    return (<h2 className='section-title'>Loading...</h2>);

  if (!recipe) {
    return (
      <div>
        no recipe found of recipeUID: {recipeUID}
      </div>
    );
  }

  return (
    <div>
      this is one recipe of recipeUID: {recipeUID}
      <Recipe recipe={recipe}/>
    </div>
  );
}
