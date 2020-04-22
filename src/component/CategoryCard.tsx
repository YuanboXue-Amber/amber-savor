import * as React from 'react';
import { IImage } from '../strapi/APItypes';
import { Card, Image } from 'react-bootstrap';

export interface ICategoryCardProps {
  image: IImage;
  name: string;
  url: string;
}

export default function CategoryCard({
  image,
  name,
  url,
}: ICategoryCardProps) {
  return (
    <Card className='category-card' border='light'>
      <div className='category-cardImageContainer'>
        <Card.Link href={url}>
          <Image src={image.url} />
        </Card.Link>
      </div>

      <div className='category-cardBody'>
        <div className='category-cardTitle'>
          <Card.Link href={url}><span>{name}</span></Card.Link>
        </div>
      </div>
    </Card>
  );
}
