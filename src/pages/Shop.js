import React from "react";
import DisplayList from "../components/display/DisplayList";
import { Container } from "reactstrap";
import Navigation from "../components/navbar/Navigation";
import './Shop.css'

const Shop = () => {
  return (
    <Container className="shop">
            <Navigation />
            <DisplayList />
    </Container>         
  );
};

export default Shop;
