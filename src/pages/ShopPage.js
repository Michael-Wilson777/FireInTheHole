import { Container } from 'reactstrap';
import ProductsList from '../products/ProductsList';


const ShopPage = () => {
    return (
        <Container>
            {/* search area goes here */}
            <ProductsList />
        </Container>
    )
};

export default ShopPage;