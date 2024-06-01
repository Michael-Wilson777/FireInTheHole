import React, { useState } from "react";
import { Container, Button } from "reactstrap";
import Shop from "./Shop";

const HomePage = () => {
  const [showShop, setShowShop] = useState(false);

  const handleClick = () => {
    setShowShop(true);
  };

  return (
    <section id="home-page">
      <Container className="home">
        {!showShop ? (
          <>
            <h1>Welcome!</h1>
            <Button color="success" onClick={handleClick}>
              Show Inventory
            </Button>
          </>
        ) : (
          <Shop />
        )}
      </Container>
    </section>
  );
};

export default HomePage;


