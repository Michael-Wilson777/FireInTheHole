import {Row, Col} from 'reactstrap'
import DisplayCard from '../components/display/DisplayCard'
import { INVENTORY } from '../data/Inventory'
import { selectItemByMildHeat } from '../components/Inventory/InventorySlice'

const MildItemsPage = () => {
    const mildItems = selectItemByMildHeat();
    return (
        <Row>
            {mildItems.map((item, idx) => {
                return (
                    item && (
                        <Col md className="m-1" key={idx}>
                            <h1 className="text-center">Today's Featured Pepper</h1>
                            <DisplayCard item={item} />
                        </Col>
                        ) 
                    )
                }
            )}
        </Row>
    );
}