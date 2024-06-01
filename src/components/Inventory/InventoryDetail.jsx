import React from "react";
import { Col, Card, CardImg, CardBody, CardText } from "reactstrap";

const InventoryDetail = ({ inventoryItem }) => {
  const { img, name, description } = inventoryItem;

  return (
    <Col md='5' className='m-4'>
      <Card>
        <CardImg top src={img} alt={name} />
        <CardBody>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InventoryDetail;


   // const params = useParams();
  
    // const [reviews, setReviews] = useState([]);
    // const [rating, setRating] = useState();
    // const [comments, setComments] = useState();
    // const [reviewSubmitted, setReviewSubmitted] = useState(false);
  
    // const inventoryItem = INVENTORY.find((inv) => {
    //   return inv.id.toString() === params.inventoryId;
    // });
  
    // if (!inventoryItem) {
    //   return (
    //     <h1>Could not locate inventory item using ID {params.inventoryId}</h1>
    //   );
    // }
  
    // const handleRatingChange = (event) => {
    //   let productRating = event.target.value;
      // Store this rating into my state
    //   setRating(productRating);
    // };
  
    // const handleCommentsChange = (event) => {
    //   let productComments = event.target.value;
      // Store this comments into my state
    //   setComments(productComments);
    // };
  
    // const addReview = () => {
    //   setReviewSubmitted(true);
      // Add the review data into my array
    //   const newReview = {
    //     rating,
    //     comments,
    //   };
  
    //   const allReviews = [...reviews, newReview];
    //   setReviews(allReviews);
    // };
  
    // const showReviews = () => {
    //   if (reviewSubmitted) {
    //     return reviews.map((review) => {
    //       return (
    //         <div>
    //           <h3>Rating: {review.rating}</h3>
    //           <p>{review.comments}</p>
    //         </div>
    //       );
    //     });
    //   }
    // };

          // <>
      //   <Card className="mt-4">
      //     <CardHeader tag="h1">{inventoryItem.name}</CardHeader>
      //     <CardBody>
      //       <Row>
      //         <Col>
      //           <img src={inventoryItem.img} fluid />
      //         </Col>
      //         <Col>
      //           <Card>
      //             <CardHeader>Description</CardHeader>
      //             <CardBody>{inventoryItem.description}</CardBody>
      //           </Card>
      //           <Card className="mt-3">
      //             <CardHeader>Add Review</CardHeader>
      //             <CardBody>
      //               <Form>
      //                 <FormGroup>
      //                   <Label>Rating</Label>
      //                   <Input onChange={handleRatingChange} type="select">
      //                     <option>Please select...</option>
      //                     <option value="1">1</option>
      //                     <option value="2">2</option>
      //                     <option value="3">3</option>
      //                     <option value="4">4</option>
      //                     <option value="5">5</option>
      //                   </Input>
      //                 </FormGroup>
      //                 <FormGroup>
      //                   <Label>Comments</Label>
      //                   <Input onChange={handleCommentsChange} type="textarea" />
      //                 </FormGroup>
      //                 <Button onClick={addReview} color="success" size="sm">
      //                   Submit
      //                 </Button>
      //               </Form>
      //             </CardBody>
      //           </Card>
      //         </Col>
      //       </Row>
      //     </CardBody>
      //     <CardFooter>
      //       {/* <p>Price: {inventoryItem.price}</p> */}
      //     </CardFooter>
      //   </Card>
      //   <hr />
      //   <Card>
      //     <CardHeader>Reviews</CardHeader>
      //     <CardBody>{showReviews()}</CardBody>
      //   </Card>
      // </>
    //);