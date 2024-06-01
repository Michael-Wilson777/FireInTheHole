import React, { useEffect, useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Table,
} from "reactstrap";
import Navigation from "../navbar/Navigation";

const AddInventory = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [addedProduct, setAddedProduct] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  /*
    useEffect(): Allows us to bind into different render events of our component

    Takes two arguments:
      1st: Callback fn (aka side effect function)
      2nd: Dependencies
        -> [ data1, data2, data3 ]: Whenever any of the listed data changes
        -> [ ]: On the very first render
        -> null/undefined: On every single render
  */

  useEffect(() => {
    console.log("Price is changing");
    if (product.price <= 0) {
      console.error("Price needs to be greater than 0");
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [product.price]); // Only when price changes

  useEffect(() => {
    let validUrlRegex =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    if (!validUrlRegex.test(product.image)) {
      console.error("Not a valid image URL");
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [product.image]);

  useEffect(() => {
    if (product.name?.length < 3 || product.description?.length < 3) {
      console.error("Name and description are requried");
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [product.name, product.description]); // if either name or description changes

  const handleInputChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    /*
    if (name === 'price' && value <= 0) {
      console.error('Price needs to be greater than 0');
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);

      let updatedProduct = {
        ...product,
        [name]: value // ex: description: 'Some description'
      }
      setProduct(updatedProduct);
    }
    */

    let updatedProduct = {
      ...product,
      [name]: value, // ex: description: 'Some description'
    };
    setProduct(updatedProduct);
  };

  const addProduct = () => {
    setAddedProduct(true);

    let updatedProducts = [...products, product];

    setProducts(updatedProducts);
  };

  const showProducts = () => {
    if (addedProduct) {
      return products.map((product) => {
        return (
          <tr>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
              <img src={product.image} width="100" />
            </td>
          </tr>
        );
      });
    }
  };

  return (
    <div id="add-inventory">
        
      <Card>
        <CardHeader>Add New Product</CardHeader>
        <CardBody>
          <Form>
            <FormGroup>
              <Label>Name</Label>
              <Input onChange={handleInputChange} name="name" />
            </FormGroup>
            <FormGroup>
              <Label>Description</Label>
              <Input
                onChange={handleInputChange}
                name="description"
                type="textarea"
              />
            </FormGroup>
            <FormGroup>
              <Label>Price</Label>
              <Input onChange={handleInputChange} name="price" type="number" />
            </FormGroup>
            <FormGroup>
              <Label>Image</Label>
              <Input onChange={handleInputChange} name="image" />
            </FormGroup>
          </Form>
        </CardBody>
        <CardFooter>
          <Button
            disabled={buttonDisabled}
            onClick={addProduct}
            color="success"
          >
            Add
          </Button>
        </CardFooter>
      </Card>
      <Card className="mt-4">
        <CardHeader>Products</CardHeader>
        <CardBody>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Thumbnail</th>
              </tr>
            </thead>
            <tbody>{showProducts()}</tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddInventory;