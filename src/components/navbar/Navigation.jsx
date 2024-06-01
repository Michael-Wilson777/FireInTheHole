import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  

} from "reactstrap";

const Navigation = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="mb-3">
      <Navbar dark color="dark" expand="md">
        <NavbarBrand href="/">
          <img 
            className="logo"
            alt='logo'
            src='./logo.jpg'
            // style={{
            //   height: 40,
            //   width: 40
            // }}
          />
        
        Fire in the Hole</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/add-product">Add New Product</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/mild'>Mild</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/medium'>Medium</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/hot'>Hot</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/fire'>Fire</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/dried'>Dried</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/flakes-powder'>Flakes/Powder</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
