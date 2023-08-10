import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './header.css';
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';

const Header = () => {
  const accountName = useSelector(
    (state: RootState) => state.user.userData.accountName
  );
  const ICW = useSelector((state: RootState) => state.user.userBalance.wood);
  const ICI = useSelector((state: RootState) => state.user.userBalance.iron);
  const ICG = useSelector((state: RootState) => state.user.userBalance.gold);

  return (
    <section className='play-header-container'>
      <Navbar className='navbar' bg='black' expand='lg'>
        <Container>
          <Navbar.Brand style={{ color: 'white' }}>
            Industrial Craft
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav>
              <Nav.Link href='#balance'>ICW: {ICW}</Nav.Link>
              <Nav.Link href='#balance'>ICI: {ICI}</Nav.Link>
              <Nav.Link href='#balance'>ICG: {ICG}</Nav.Link>
              <Navbar.Text style={{ color: 'white' }}>
                Wallet: {accountName}
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;
