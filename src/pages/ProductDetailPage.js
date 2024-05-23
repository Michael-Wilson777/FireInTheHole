import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectProductById } from '../products/productsSlice'
import ProductDetail from "../products/ProductDetail";
import ProductsList from "../products/ProductsList";

const ProductDetailPage = () => {
    const { productId } = useParams();
    const product = selectProductById(productId);
  
    return (
      <Container>
        <SubHeader current={product.name} detail={true} />
        <Row>
          <CampsiteDetail product={product} />
          <CommentsList productId={productId} />
        </Row>
      </Container>
    );
  };
  
  export default ProductDetailPage;
