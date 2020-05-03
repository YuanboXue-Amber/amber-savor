import * as React from 'react';
import { IInstruction } from '../strapi/APItypes';
import { ListGroup, Image } from 'react-bootstrap';
import MarkdownContainer from './MarkdownContainer';

export interface IRecipeInstructionsProps {
  instructions: IInstruction[];
}

export default function RecipeInstructions({
  instructions,
}: IRecipeInstructionsProps) {
  return (
    <ListGroup variant='flush'>
      {instructions.map((step) => (
        <ListGroup.Item className='recipeInstructions-step'>
          <ListGroup className='inner-ListGroup'>
            <ListGroup.Item className='recipeInstructions-step-title'>
              <h3>Step {step.step}</h3>
            </ListGroup.Item>

            {/* images for this step */}
            {step.images &&
              step.images.length > 0 &&
              step.images.map((image) => (
                <ListGroup.Item className='recipeInstructions-step-image'>
                  <Image src={image.url} />
                </ListGroup.Item>
              ))}

            <ListGroup.Item>
              <MarkdownContainer
                content={step.longDescription ?? step.shortDescription}
              />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
