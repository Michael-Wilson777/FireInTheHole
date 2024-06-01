// import { useState, useEffect } from "react";
// import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
// import { useSpring, animated } from "react-spring";

// const AnimatedDisplayCard = ({ item }) => {
//   const { img, name, description } = item;
//   const [toggle, setToggle] = useState(false);

//   const animatedStyle = useSpring({
//     opacity: toggle ? 1 : 0,
//     transform: toggle ? "scale(1,1)" : "scale(1,0)",
//     config: { duration: 500 },
//   });

//   useEffect(() => {
//     setToggle(true);
//   }, []);

import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import "./Card.css";

const DisplayCard = ({ item }) => {
  const { img, name, Scoville } = item;
  return (
    <Card className="product-card">
      <CardImg className="product-img" src={img} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{Scoville} scoville units</CardText>
      </CardBody>
    </Card>
  );
};

export default DisplayCard;
// };

// export default AnimatedDisplayCard;
