import {Card, CardImg, CardText, CardBody, Col} from 'reactstrap';

const ProductDetail = ({product}) => {
    const {img, name, description} = product;

    return (
        <Col md='5' className='m-4'>
            <Card>
                <CardImg top src={img} alt={name} />
                <CardBody>
                    <CardText>
                        {description}
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CampsiteDetail;