import { selectItemByMediumHeat } from "../components/Inventory/InventorySlice";
import { Container, Row, Col } from "reactstrap";
import DisplayCard from "../components/display/DisplayCard";
import Navigation from "../components/navbar/Navigation";

const MediumItemsPage = () => {
  const mediumItems = selectItemByMediumHeat();
  return (
    <>
      <Navigation current="/medium" />
      <Container fluid className="text-center">
        <Row className="align-items-center">
          {mediumItems.map((item, idx) => {
            return (
              item && (
                <Col md="3" className="m-1" key={idx}>
                  <DisplayCard item={item} />
                </Col>
              )
            );
          })}
        </Row>
      </Container>
    </>
  );
};
export default MediumItemsPage;
