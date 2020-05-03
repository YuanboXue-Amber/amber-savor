import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../context/ContextProvider';
import Loading from '../component/Loading';
import Title from '../component/Title';
import RecipeJumbotron from '../component/RecipeJumbotron';
import RecipeInstructions from '../component/RecipeInstructions';
import { Tabs, Tab } from 'react-bootstrap';
import RecipeInstructionsShort from '../component/RecipeInstructionsShort';

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

  recipe.instructions.sort((a, b) => a.step - b.step);
  return (
    <div>
      <Title name={recipe.name} />
      <RecipeJumbotron recipe={recipe} />
      <Tabs id='recipe-instructions-tabs'>
        <Tab eventKey='1' title='detailed Instructions'>
          <RecipeInstructions instructions={recipe.instructions} />
        </Tab>
        <Tab eventKey='2' title='Shorter instructions'>
          <RecipeInstructionsShort instructions={recipe.instructions} />
        </Tab>
      </Tabs>
    </div>
  );
}
