import * as React from 'react';
import { useParams } from 'react-router-dom';
import Recipe from '../component/Recipe';
import { Context } from '../context/ContextProvider';
import Loading from '../component/Loading';
import Title from '../component/Title';
import RecipeJumbotron from '../component/RecipeJumbotron';

export interface IRecipeDetailsProps {}

export default function RecipeDetails(props: IRecipeDetailsProps) {
  const { recipeUID } = useParams();
  const context = React.useContext(Context);
  const { loading, recipe, modifyContext } = context;

  React.useEffect(() => {
    modifyContext.getOneRecipe(recipeUID);
  }, [recipeUID, modifyContext]);

  if (loading) return <Loading />;

  if (!recipe) {
    return (
      <div>
        <br />
        <Title name={'Oops, no recipe found...'} />;
      </div>
    );
  }

  return (
    <div>
      <Title name={recipe.name} />
      <RecipeJumbotron recipe={recipe} />
      this is one recipe of recipeUID: {recipeUID}
      <Recipe recipe={recipe} />
    </div>
  );
}
