import * as React from 'react';
import { IImage } from '../strapi/APItypes';
import { Card, Image, Row, Col } from 'react-bootstrap';
import { IoIosTimer } from 'react-icons/io';
import { GoListOrdered } from 'react-icons/go';

export interface IRecipeCardProps {
  image: IImage;
  name: string;
  url: string;
  numOfingredients: number;
  minBeforeReady: string;
}

export default function RecipeCard({
  image,
  name,
  url,
  numOfingredients,
  minBeforeReady
}: IRecipeCardProps) {
  return (
    <Card className='recipe-card' border='light'>
      <div className='recipe-cardImageContainer'>
        <Card.Link href={url}>
          <Image src={image.url} />
        </Card.Link>
      </div>

      <div className='recipe-cardBody'>
        <div className='recipe-cardTitle'>
          <Card.Link href={url}><span>{name}</span></Card.Link>
        </div>
        <Card.Text>
          <Row className="justify-content">
            <Col md={5} xs className='recipe-cardTimer'>
              <IoIosTimer />{minBeforeReady}
            </Col>
            <Col md={6} xs className='recipe-cardIngredients'>
              <GoListOrdered />{numOfingredients} ingredent{numOfingredients > 1 ? 's' : ''}
            </Col>
          </Row>
        </Card.Text>
      </div>
    </Card>
  );
}
