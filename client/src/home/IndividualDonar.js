import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
const Container = styled.div`
  background-color: rgba(250, 236, 214, 0.5);
`;
const Wrapper = styled.div`
  padding-top: 45.45px;
  padding-right: 45.45px;
  padding-bottom: 45.45px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 85.45%;
  object-fit: fill;
  background-color: grey;
  border-radius: 20px;
  border: 1px solid black;
`;
const InformationContainer = styled.div`
  flex: 1;
  border: 1px solid black;
  border-radius: 20px;
  padding: 28px;
  height: 85%;
  background-color: rgba(242, 222, 186, 1);
`;
const TitleName = styled.h1`
  font-weight: 450px;
  font-size: 34.45px;
  color: black;
  font-family: "Urbanist", sans-serif;
  letter-spacing: 1.8px;
  margin-top: 0;
`;
const Title = styled.h1`
  font-weight: 450px;
  font-size: 28.45px;
  font-family: "Urbanist", sans-serif;
  color: black;
  letter-spacing: 1.4px;
  margin-bottom: 30px;
`;
const ListDescription = styled.li`
  margin: 18.45px 0px;
  font-family: "Urbanist", sans-serif;
  font-size: 18.45px;
  color: black;
`;
const Description = styled.div`
  margin-bottom: 45.45px;
`;
const Price = styled.input`
  width: 45.45%;
  padding: 8.45px;
  font-family: "Urbanist", sans-serif;
  font-size: 18.45px;
  border: 1px solid darkred;

  &:focus {
    outline: none;
  }
`;
const FilterProduct = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95.45%;
  margin: 28.45px 0px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 18px;
`;
const FilterTitle = styled.span`
  font-family: "Urbanist", sans-serif;
  font-size: 20.45px;
  font-weight: 100px;
  margin-right: 8.45px;
  letter-spacing: 0.8px;
  color: darkred;
`;
const SelectElement = styled.select`
  padding: 8.45px;
  font-family: "Urbanist", sans-serif;
  cursor: pointer;
`;
const OptionElement = styled.option`
  font-family: "Urbanist", sans-serif;
  font-weight: bold;
`;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 44.45%;
`;
const Button = styled.button`
  font-family: "Urbanist", sans-serif;
  border: 0 solid;
  color: black;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-offset: 0px;
  padding: 14.45px;
  font-weight: bolder;
  text-shadow: none;
  background-color: transparent;
  font-size: 15px;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    cursor: pointer;
    border: 1px solid;
    background-color: limegreen;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 0.3px 0.3px 0.6px #427388;
  }
`;
const Navbars = styled.div`
  margin-top: 20px;
  display: flex;
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  background-color: darkred;
  margin-bottom: 15px;
  color: white;
  font-family: "Uranist", sans-serif;
`;

const NavbarsItem = styled.div`
  font-size: 18px;
  font-family: "Urbanist", sans-serif;
  font-weight: bold;
  text-align: center;
  letter-spacing: 1.45px;
  margin: 0 15px;
  cursor: pointer;
  padding: 10px 15px;
  background-color: ${(props) =>
    props.selected ? "rgba(242, 222, 186, 0.8)" : "darkred"};
  color: ${(props) => (props.selected ? "darkred" : "white")};
  border-radius: ${(props) => (props.selected ? "20px" : "0px")};
`;
const OverallInfo = styled.div`
  display: flex;
  width: 60%;
  height: 75%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const IndividualDonar = (props) => {
  const location = useLocation();
  const [locationState, setLocationState] = React.useState(location.state);

  React.useEffect(() => {
    console.log(location);
    if (location.state) {
      setLocationState(location.state);
    }
  }, [location]);
  const [selected, setSelected] = useState("story");
  function handleSelect(name) {
    setSelected(name);
  }
  const navigate = useNavigate();
  const [donatingAmount, setdonatingAmount] = useState("");
  const sendUrl = "/donor/donation/63cc0ba798e39474aae283c1";
  const onHandleClick = async (e) => {
    e.preventDefault();
    try {
      const number = parseInt(donatingAmount) * 100;
      console.log(localStorage.getItem("token"));
      const response = await axios.post(
        sendUrl,
        {
          donatingAmount: number.toString(),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
      const checkOutUrl = response.data.url;
      if (response.data.success) {
        alert("Donation Successful");
        window.location.href = checkOutUrl;
      }
    } catch (err) {
      alert(`${err.message}`);
      console.log(err);
    }
  };
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <ImageContainer>
            <Image src={locationState.img} />
            <h3
              style={{
                fontSize: "18px",
                fontFamily: "Urbanist",
                justifyContent: "start",
                color: "darkred",
                " letterSpacing": "1.45px",
                margin: "13px",
              }}
            >
              NRs. 2,00,000 Raised
            </h3>
            <ProgressBar
              completed={38}
              maxCompleted={100}
              height={"14px"}
              width={"350px"}
            />
            <h3
              style={{
                fontSize: "18px",
                fontFamily: "Urbanist",
                justifyContent: "start",
                color: "limegreen",
                " letterSpacing": "1.45px",
                margin: "13px",
              }}
            >
              Goal: NRs. 5,00,000
            </h3>
          </ImageContainer>
          <OverallInfo>
            <InformationContainer>
              <TitleName>{locationState.name}</TitleName>
              <Title>{locationState.title}</Title>
              <Description>
                <ListDescription>{locationState.description}</ListDescription>
                <ListDescription>{locationState.progress}</ListDescription>
              </Description>
              <FilterTitle style={{ fontWeight: "bold" }}>
                Donation donatingAmount ($):{" "}
              </FilterTitle>
              <Price
                type="number"
                value={donatingAmount}
                onChange={(e) => setdonatingAmount(e.target.value)}
              />
              <FilterProduct>
                <Filter>
                  <FilterTitle style={{ color: "black" }}>
                    Do you want to show yourself as Anonymous:
                  </FilterTitle>
                  <SelectElement>
                    <OptionElement>No</OptionElement>
                    <OptionElement>Yes</OptionElement>
                  </SelectElement>
                </Filter>
              </FilterProduct>
              <AddContainer>
                <Button onClick={onHandleClick}>DONATE</Button>
              </AddContainer>
            </InformationContainer>
            <Navbars>
              <NavbarsItem
                selected={selected === "story"}
                onClick={() => handleSelect("story")}
              >
                Story
              </NavbarsItem>
              <NavbarsItem
                selected={selected === "testimonials"}
                onClick={() => handleSelect("testimonials")}
              >
                Testimonials
              </NavbarsItem>
              <NavbarsItem
                selected={selected === "updates"}
                onClick={() => handleSelect("updates")}
              >
                Updates
              </NavbarsItem>
            </Navbars>
          </OverallInfo>
        </Wrapper>

        <Footer />
      </Container>
    </>
  );
};
export default IndividualDonar;
