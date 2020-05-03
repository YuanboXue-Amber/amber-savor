import * as React from 'react';
import { IRecipe, IIngredient } from '../strapi/APItypes';
import { Jumbotron, ListGroup, Image } from 'react-bootstrap';
import { convertMinToDisplay } from '../utils/timeConvertor';
import { BsDot } from 'react-icons/bs';
import MarkdownContainer from './MarkdownContainer';

export interface IRecipeJumbotronProps {
  recipe: IRecipe;
}

export default function RecipeJumbotron({ recipe }: IRecipeJumbotronProps) {
  return (
    <Jumbotron>
      <ListGroup horizontal='md' className='recipeJumbotron'>
        <ListGroup.Item className='recipeJumbotron-imageContainer'>
          <Image className='recipeJumbotron-image' src={recipe.images[0].url} />
        </ListGroup.Item>
        <ListGroup.Item className='recipeJumbotron-contentContainer'>
          <ListGroup variant='flush'>
            <ListGroup.Item className='recipeJumbotron-description'>
              <MarkdownContainer content={recipe.description} />
            </ListGroup.Item>
            <ListGroup.Item>
              <span className='recipeJumbotron-keyword'>Serves: </span>
              {recipe.serves}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className='recipeJumbotron-keyword'>Time needed </span>
              {
                <ListGroup horizontal='sm' className='inner-ListGroup'>
                  <ListGroup.Item>
                    <span className='recipeJumbotron-keyword'>Prep: </span>
                    {convertMinToDisplay(recipe.timeNeeded.prepTime)}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className='recipeJumbotron-keyword'>wait: </span>
                    {convertMinToDisplay(recipe.timeNeeded.waitTime)}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className='recipeJumbotron-keyword'>cook: </span>
                    {convertMinToDisplay(recipe.timeNeeded.cookTime)}
                  </ListGroup.Item>
                </ListGroup>
              }
            </ListGroup.Item>
            <ListGroup.Item>
              <span className='recipeJumbotron-keyword'>
                {`${recipe.ingredients.length} `}
              </span>
              Ingredients
              {
                <ListGroup horizontal='lg' className='inner-ListGroup'>
                  {recipe.ingredients.map((item: IIngredient) => {
                    return (
                      <ListGroup.Item>
                        <span className='recipeJumbotron-keyword'>
                          <BsDot />
                        </span>
                        {`${item.name}: ${item.quantity}`}
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              }
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </Jumbotron>
  );
}
