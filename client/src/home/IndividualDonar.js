import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";

const Container = styled.div`
  background-color: rgba(242, 222, 186, 0.8);
`;
const Wrapper = styled.div`
  margin-top: 28.45px;
  padding: 45.45px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 85.45%;
  height: 74.45vh;
  object-fit: cover;
  background-color: grey;
  border-radius: 20px;
  margin-left: 14.45px;
`;
const InformationContainer = styled.div`
  flex: 1;
  border: 1px solid white;
  border-radius: 20px;
  padding: 28px;
  background-color: grey;
`;
const Title = styled.h1`
  font-weight: 450px;
  margin-bottom: 45.45px;
  font-size: 32.45px;
  font-family: "Urbanist", sans-serif;
  color: #f2faff;
`;
const ListDescription = styled.li`
  margin: 18.45px 0px;
  font-family: "Urbanist", sans-serif;
  font-size: 18.45px;
  color: #f2faff;
`;
const Description = styled.div`
  margin-bottom: 45.45px;
`;
const Price = styled.input`
  width: 45.45%;
  padding: 8.45px;
  font-family: "Urbanist", sans-serif;
  font-size: 18.45px;
  border: 1px solid #f2faff;

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
  color: #f2faff;
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
  color: whitesmoke;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, 0.5);
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
const IndividualDonar = (props) => {
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={props.img} />
        </ImageContainer>
        <InformationContainer>
          <Title>{props.name}</Title>
          <Description>
            <ListDescription>{props.description}</ListDescription>
            <ListDescription>{props.progress}</ListDescription>
          </Description>
          <FilterTitle>Donation Amount ($): </FilterTitle>
          <Price />
          <FilterProduct>
            <Filter>
              <FilterTitle>
                Do you want to show yourself as Anonymous:
              </FilterTitle>
              <SelectElement>
                <OptionElement>No</OptionElement>
                <OptionElement>Yes</OptionElement>
              </SelectElement>
            </Filter>
          </FilterProduct>
          <AddContainer>
            <Button>DONATE</Button>
          </AddContainer>
        </InformationContainer>
      </Wrapper>

      <Footer />
    </Container>
  );
};
export default IndividualDonar;
