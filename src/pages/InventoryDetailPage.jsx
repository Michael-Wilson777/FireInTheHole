// import React from "react";
// import { Container, Row } from "reactstrap";
// import { useParams } from "react-router-dom";
// import { selectInventoryById } from "../components/Inventory/InventorySlice";
// import InventoryDetail from "../components/Inventory/InventoryDetail";
// import Navigation from "../components/navbar/Navigation";

// const InventoryDetailPage = () => {
//   const { inventoryItemId } = useParams();
//   const inventoryItem = selectInventoryById(inventoryItemId);

//   if (!inventoryItem) {
//     return <div>Item not found</div>;
//   }

//   return (
//     <Container>
//       <Navigation current={inventoryItem.name} detail={true} />
//       <Row>
//         <InventoryDetail inventoryItem={inventoryItem} />
//       </Row>
//     </Container>
//   );
// };

// export default InventoryDetailPage;
