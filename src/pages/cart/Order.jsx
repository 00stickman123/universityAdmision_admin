import { useEffect, useState } from "react";
import "./cart.css";
import { Col, Container, Row } from "reactstrap";
import authService from "../../api/user.service";
import { format } from "date-fns";
const Order = () => {
  const [listCart, setListCart] = useState([]);
  const [load, setLoad] = useState(null);
  useEffect(() => {
    authService.getOrder().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data.data);
        setListCart(data.data);
      }
    });
  }, [load]);
  const Tr = ({ item }) => {
    // const dispatch = useDispatch();
    const deleteProduct = () => {
      // dispatch(cartActions.deleteItem(item.id));
      authService.deleteCart(item.product._id).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setLoad(data.data);
        }
      });
    };
    return (
      <tr>
        <td>{item.orderby.email}</td>
        <td>{format(new Date(item.createdAt), "dd/MM/yyyy")}</td>
        <td>{item.products.length}</td>
        <td>${item.paymentIntent.amount}</td>
        <td>{item.paymentIntent.currency}</td>
        <td>{item.orderStatus}</td>
        <td>
          {item.products.map((product, index) => (
            <img
              key={index}
              src={product.image} // Assuming 'image' is the property containing the image URL
              alt={`Product ${index + 1}`}
              style={{ maxWidth: "100px", maxHeight: "100px" }} // Adjust dimensions as needed
            />
          ))}
        </td>
      </tr>
    );
  };
  return (
    <div>
      <section className="pt-9 pb-9">
        <Container className="pl-8 pr-8">
          <Row className="d-flex ">
            <Col lg="12">
              {listCart && listCart?.length > 0 ? (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>orderby</th>
                      <th>createdAt</th>
                      <th>count products</th>
                      <th>Price</th>
                      <th>currency</th>
                      <th>orderStatus</th>
                      <th>Image</th>
                    </tr>
                  </thead>

                  <tbody>
                    {listCart.map((item, index) => (
                      <Tr item={item} key={index}></Tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <h2 className="fs-4 text-center">No item added to the order</h2>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Order;
