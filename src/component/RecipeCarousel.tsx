import * as React from 'react';
import { IRecipe } from '../strapi/APItypes';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

interface IStyledHeroProps {
  imgUrl: string;
}

const StyledHero = styled.header<IStyledHeroProps>`
  margin-left: auto;
  margin-right: auto;
  width: 100% !important;
  height: 40rem !important;

  opacity: 0.5;
  position: relative;
  filter: blur(4px);
  box-shadow: inset 120px 0 15px -4px var(--primaryGreyColor),
              inset -120px 0 8px -4px var(--primaryGreyColor);

  @media (max-width: 576px) {
    height: 20rem !important;
    box-shadow: inset 12px 0 15px -4px var(--primaryGreyColor),
                inset -12px 0 8px -4px var(--primaryGreyColor);
  }
  @media (min-width: 577px) and (max-width: 768px) {
    height: 30rem !important;
    box-shadow: inset 60px 0 50px -20px var(--primaryGreyColor),
                inset -60px 0 50px -20px var(--primaryGreyColor);
  }
  @media (min-width: 769px) and (max-width: 1920px){
    height: 40rem !important;
    box-shadow: inset 100px 0 150px -4px var(--primaryGreyColor),
                inset -100px 0 80px -4px var(--primaryGreyColor);
  }
  @media (min-width: 1921px) {
    height: 60rem !important;
    box-shadow: inset 150px 0 150px -4px var(--primaryGreyColor),
                inset -150px 0 80px -4px var(--primaryGreyColor);
  }

  background: url(${(props: IStyledHeroProps) => props.imgUrl}) center/cover no-repeat;
`;


export interface IRecipeCarouselProps {
  featuredRecipes: IRecipe[]
}

export default function RecipeCarousel ({featuredRecipes}: IRecipeCarouselProps) {
  return (
    <Carousel>
      {
        featuredRecipes.map(recipe => {
          return (
            <Carousel.Item>
              <StyledHero imgUrl={recipe.images[0].url} />
              <Carousel.Caption>
                <p className='carousel-captionTitle'>{recipe.name}</p>
                <p>{recipe.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })
      }
    </Carousel>
  );
}
