import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const InventoryItemCard = ({ inventory }) => {
  const { id, img, name, description } = inventory;

  return (
    <div className="card-item">
      <Link to={`/inventory/${id}`} className="card-link">
        <Card className="card m-auto">
          <CardImg src={img} alt={name} className="card-img" />
          <CardBody className="text-light fs-6 card-body">
            <CardTitle className="card-title text-dark">{name}</CardTitle>
            <CardText className="card-text text-dark mb-4">{description}</CardText>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default InventoryItemCard;

