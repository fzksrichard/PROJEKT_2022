import { Add, ArtTrack, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState } from 'react'
import { useEffect } from 'react'
import { userRequest } from '../requestMethods'
import { useNavigate, Link } from "react-router-dom";
import { clearCart } from "../redux/cartRedux";


const KEY = "pk_test_51Lr3ZlEa2OAIXAPwLfB8nSTop9P86QgYTAGMaNCXq36e5EVTh17FisQ9CI80DQa4sZzrdtJix8Yw8I5RKcE5U0ab00bHj7tNf4";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Empty = styled.h1`
  font-weight: 600;
  text-align: center;
  font-size: 45px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Image = styled.img`
  width: 200px;
  height: 22vh;
  object-fit: contain;
  ${mobile({ height: "40vh" })}
`;

const TopButton = styled.button`
  padding: 10px 30px 10px 30px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Details = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 1px solid black;
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", { //itt a probléma?
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        Navigate("/success", {
          state: { stripeData: res.data, products: cart },
        });
      } catch { }
    };

    stripeToken && makeRequest();

  }, [stripeToken, cart.total, Navigate, cart]);



  const handleDelete = () => {
    dispatch(clearCart());
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>KOSÁR TARTALMA</Title>
        <Top>
          <Link to="/">
            <TopButton>
              VÁSÁRLÁS <br /> FOLYTATÁSA
            </TopButton>
          </Link>
          <TopButton onClick={handleDelete} type="filled">
            KOSÁR TÖRLÉSE
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            <Empty style={cart.total !== 0 ? { display: "none" } : {}}>
              A kosár üres!
            </Empty>

            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Termék neve:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>Termék azonosító:</b> {product._id}
                    </ProductId>
                    <b>Válaszott szín:</b>
                    <ProductColor color={product.color} />
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <ProductAmount>{product.quantity}</ProductAmount>
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>RENDELÉS ÖSSZEGZÉSE</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Termékek ára</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Szállítási költség</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Kedvezmény</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Teljes összeg</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="DAC rendelés"
              image="https://i.postimg.cc/wvzF82KR/DAC.png"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button style={cart.total === 0 ? { display: "none" } : {}}>
                Megrendelés
              </Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;