// import React from "react";
import { Row, Col } from "reactstrap";
import InventoryItemCard from "./InventoryItemCard";
import { selectAllInventory } from "./InventorySlice";

const InventoryList = () => {
  const inventoryItems = selectAllInventory();

  return (
    <Row className="justify-content-center row row-cols">
      {inventoryItems.map((inventoryItem, idx) => (
        <Col md="2" key={idx}>
          <InventoryItemCard className="cards" inventory={inventoryItem} />
        </Col>
      ))}
    </Row>
  );
};

export default InventoryList;


