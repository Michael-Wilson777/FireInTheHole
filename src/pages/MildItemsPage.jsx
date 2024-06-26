import {Container, Row, Col} from 'reactstrap'
import DisplayCard from '../components/display/DisplayCard'
// import { INVENTORY } from '../data/Inventory'
import { selectItemByMildHeat } from '../components/Inventory/InventorySlice'
import Navigation from '../components/navbar/Navigation'

const MildItemsPage = () => {
    const mildItems = selectItemByMildHeat();
    return (
        <>
        <Navigation current='/mild' />
        <Container fluid className='text-center mild-container'>
            <Row className='align-items-center'>
                {mildItems.map((item, idx) => {
                    return (
                        item && (
                            <Col md='3' className="m-1" key={idx}>                                
                                <DisplayCard item={item} />
                            </Col>
                            ) 
                        )
                    }
                )}
            </Row>
        </Container>
        </>
    );
}
export default MildItemsPage