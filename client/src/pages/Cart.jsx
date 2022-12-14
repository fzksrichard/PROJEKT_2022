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
  width: 50%;
  height: 80%;
  object-fit: contain;
  ${mobile({ height: "40vh" })}
  margin-top: 10px;
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

const DetailPerLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const ProductName = styled.div`
  margin: 10px;
`;

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
  height: 40vh;
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

  let totalcost = 0
  let cost = 0
  let costperorder = []
  let i = 0

  let current = new Date();
  let deadline=new Date();
  let help=[]
  let days=0;
  let difftime

  cart.products.map((product) => {
    switch (product.type) {
      case "web??ruh??z": cost += 150000; break;
      case "h??rport??l": cost += 50000; break;
      case "portf??li??": cost += 30000; break;
      case "blog": cost += 20000; break;
      case "f??rum": cost += 35000; break;
      case "admin": cost += 15000; break;
    }
    if (product.responsive) cost += 10000
    if (product.logo) cost += 20000
    cost += product.menuitems * 20000
    if (!product.sourcemedia) cost+=30000;
    deadline=new Date(product.deadline)
    difftime = Math.abs(deadline - current);
    days = Math.ceil(difftime / (1000 * 60 * 60 * 24)); 
    if (days < 60) { cost+=50000; }
    else if (days < 90) { cost+=30000; }
    else if (days < 120) { cost+=15000; }
    else if (days < 18) { cost+=5000; }
    costperorder[i++] = cost
    totalcost += cost
    cost = 0
  })
  i = 0

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: totalcost * 100,
        });
        Navigate("/success", {
          state: { stripeData: res.data, products: cart, totalordercost: totalcost },
        });
      } catch { }
    };

    stripeToken && makeRequest();

  }, [stripeToken, totalcost, Navigate, cart]);



  const handleDelete = () => {
    dispatch(clearCart());
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>WEBOLDAL TERV</Title>
        <Top>
          <Link to="/design">
            <TopButton>
              TERVEZ??S <br /> FOLYTAT??SA
            </TopButton>
          </Link>
          <TopButton onClick={handleDelete} type="filled">
            TERV T??RL??SE
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            <Empty style={cart.total !== 0 ? { display: "none" } : {}}>
              Nincs terv!
            </Empty>

            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src="https://www.cascadewebdesigns.com/wp-content/uploads/2020/07/Internet-platforms.png" />
                  <Details>
                    <ProductName>
                      <b>Weboldal neve:</b> {product.title}
                    </ProductName>
                    <ProductName>
                      <b>Weboldal tipusa:  </b> {product.type}
                    </ProductName>
                    <ProductName>
                      <b>Men??pontok sz??ma:</b> {product.menuitems}
                    </ProductName>
                    <ProductName>
                      <b>Hat??rid??:</b> {product.deadline}
                    </ProductName>
                    <ProductName>
                      <b>Saj??t sz??vegek, k??pek, stb:  </b> {product.sourcemedia ? "Igen" : "Nem"}
                    </ProductName>
                    <ProductName>
                      <b>Reszponzivit??s:  </b> {product.responsive ? "Igen" : "Nem"}
                    </ProductName>
                    <ProductName>
                      <b>Logo:  </b> {product.logo ? "Igen" : "Nem"}
                    </ProductName>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <ProductAmount>{product.quantity}</ProductAmount>
                  </ProductAmountContainer>
                  <ProductPrice>
                    {costperorder[i++]} Ft
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>TERV ??SSZEGZ??SE</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Weboldal elk??sz??t??s??nek ??ra</SummaryItemText>
              <SummaryItemPrice>{totalcost} Ft</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Fizetend?? el??leg</SummaryItemText>
              <SummaryItemPrice>{totalcost / 2} Ft</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Teljes ??sszeg</SummaryItemText>
              <SummaryItemPrice>{totalcost / 2} Ft</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="DAC rendel??s"
              image="https://i.ibb.co/tMMVXsH/2022-12-12-13-37-27-GUI-Tervek-K-pek-Logo-Google-Docs.png"
              billingAddress
              shippingAddress
              currency='HUF'
              description={`Fizetend?? ??sszeg: ${totalcost/2} Ft`}
              amount={totalcost/2 * 100}
              token={onToken}
              stripeKey={KEY}

            >
              <Button style={totalcost === 0 ? { display: "none" } : {}}>
                Megrendel??s
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