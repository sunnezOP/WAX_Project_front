import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import {
  Discord,
  Twitter,
  EnvelopeFill,
  HouseFill,
} from 'react-bootstrap-icons';
import './footer.css';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section style={{ marginTop: '5vh' }} className='footer-container'>
      <div className='d-flex flex-column align-items-center'>
        <div className='d-flex'>
          <a
            href='https://discord.gg/rXB6Tj4jUd'
            target='_blank'
            rel='noreferrer'
          >
            <Discord width={24} height={24} color={'White'} />
          </a>
          <a
            href='https://twitter.com/industrial_ct'
            target='_blank'
            rel='noreferrer'
          >
            <Twitter width={24} height={24} color={'White'} />
          </a>
          <a
            href='mailto:ic@industrialcraft.io'
            target='_blank'
            rel='noreferrer'
          >
            <EnvelopeFill width={24} height={24} color={'White'} />
          </a>
          <a
            href='https://wax.atomichub.io/explorer/collection/wax-mainnet/industrialct'
            target='_blank'
            rel='noreferrer'
          >
            <HouseFill width={24} height={24} color={'White'} />
          </a>
        </div>
        <div>©Industrial Craft All rights reserved</div>
        <div>
          <a
            className='link-style'
            style={{ cursor: 'pointer' }}
            onClick={() => setShowModal(true)}
          >
            Legals
          </a>
        </div>
        <Modal
          size='lg'
          show={showModal}
          onHide={() => setShowModal(false)}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Rights</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              efficitur lacinia mi eget pharetra. Praesent ac rutrum ante.
              Aliquam erat volutpat. Nunc molestie enim vel magna dapibus, vel
              tincidunt velit fringilla. Integer ac dolor sed nisi placerat
              pellentesque non at libero. Sed egestas nibh vitae ipsum
              condimentum, eget iaculis erat egestas. Proin tincidunt efficitur
              efficitur. In auctor, lectus eget placerat aliquet, purus eros
              congue magna, id congue sapien libero eu eros.
            </p>
          </Modal.Body>
        </Modal>
      </div>
    </section>
  );
};

export default Footer;
