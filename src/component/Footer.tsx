import * as React from 'react';
import { Navbar, OverlayTrigger, Popover, Button } from 'react-bootstrap';
import { AiOutlineMail } from 'react-icons/ai';

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <Navbar bg='light' sticky='bottom' className='myfooter'>
      <Navbar.Collapse className='justify-content-end'>
        {/* <Navbar.Brand href='#'>Navbar</Navbar.Brand> */}
        <OverlayTrigger
          trigger='click'
          key={'top'}
          placement={'top'}
          overlay={
            <Popover id={`popover-positioned-top`}>
              <Popover.Content>yuanboxue@outlook.com</Popover.Content>
            </Popover>
          }
        >
          <Button className='contact-me-button'>
            <AiOutlineMail />
            {` Contect me`}
          </Button>
        </OverlayTrigger>
      </Navbar.Collapse>
    </Navbar>
  );
}
