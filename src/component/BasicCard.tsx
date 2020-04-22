import * as React from 'react';
import { IImage } from '../strapi/APItypes';
import { Card, Image } from 'react-bootstrap';

export interface IBasicCardProps {
  image: IImage;
  name: string;
  description?: string;
  url: string;
}

export default function BasicCard({
  image,
  name,
  description,
  url,
}: IBasicCardProps) {
  return (
    <Card className='card' border='light'>
      <div className='cardImageContainer'>
        <Card.Link href={url}>
          <Image src={image.url} />
        </Card.Link>
      </div>

      <div className='cardBody'>
        <div className='cardTitle'>
          <Card.Link href={url}><span>{name}</span></Card.Link>
        </div>
        {/* {description && <Card.Text>{description}</Card.Text>} */}
      </div>
    </Card>
  );
}
