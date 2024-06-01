import {Container, Row, Col} from 'reactstrap'
import DisplayCard from '../components/display/DisplayCard'
import Navigation from '../components/navbar/Navigation'
import { selectItemByHotHeat } from '../components/Inventory/InventorySlice'

const HotItemsPage = () => {
    const hotItems = selectItemByHotHeat();
    return (
        <>
        <Navigation current='/mild' />
        <Container fluid className='text-center'>
            <Row className='align-items-center'>
                {hotItems.map((item, idx) => {
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
    )
};
export default HotItemsPage