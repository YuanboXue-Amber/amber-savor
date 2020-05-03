import * as React from 'react';
import { IInstruction } from '../strapi/APItypes';
import { ListGroup } from 'react-bootstrap';
import MarkdownContainer from './MarkdownContainer';

export interface IRecipeInstructionsShortProps {
  instructions: IInstruction[];
}

export default function RecipeInstructionsShort({
  instructions,
}: IRecipeInstructionsShortProps) {
  instructions.sort((a, b) => a.step - b.step);
  return (
    <ListGroup variant='flush'>
      {instructions.map((step) => (
        <ListGroup.Item className='recipeInstructions-step'>
          <ListGroup className='inner-ListGroup' horizontal='sm'>
            <ListGroup.Item className='recipeInstructions-short-step-title'>
              <h4>Step {step.step}</h4>
            </ListGroup.Item>

            <ListGroup.Item>
              <MarkdownContainer content={step.shortDescription} />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
