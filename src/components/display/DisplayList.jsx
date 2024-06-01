import React from "react";
import { Row, Col } from "reactstrap";
// import { selectAllInventory } from '../Inventory/InventorySlice';
import DisplayCard from "./DisplayCard";
import { INVENTORY } from "../../data/Inventory";

const DisplayList = () => {
  const items = INVENTORY;
   

        return (
            <Row>
                {items.map((item, idx) => {
                    return (
                        item.featured && (
                            <Col md='6' className="m-1" key={idx}>
                                <h1 className="text-center">Today's Featured Pepper</h1>
                                <DisplayCard item={item} />
                            </Col>
                            ) 
                        )
                    }
                )}
            </Row>
        );
     
};

export default DisplayList;

    


