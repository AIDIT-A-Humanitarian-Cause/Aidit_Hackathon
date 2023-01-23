import { FaCheck } from 'react-icons/fa';
import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
const CheckmarkContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: 'Urbanist', sans-serif;
`;

const CheckmarkCircle = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Checkmark = styled(FaCheck)`
  width: 80px;
  height: 80px;
  color: white;
  animation: tick 1s ease-in-out;

  @keyframes tick {
    0% {
      transform: scale(0);
    }
    70% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Description = styled.p`
  font-size: 24px;
  margin-top: 30px;
  text-align: center;
  letter-spacing: 0.8px;
`;

const HomeButton = styled.button`
  margin-top: 10px;
  padding: 15px 15px;
  background-color: darkred;
  color: white;
  font-weight: bold;
  font-family: 'Urbanist', sans-serif;
  letter-spacing: 0.8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: darkgreen;
  }
`;

function CheckmarkComponent() {
  const location = useLocation();
  const [locationState, setLocationState] = useState({});
  useEffect(() => {
    if (location.state) {
      setLocationState(location.state);
    }
  }, [location]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    // <Container>
    <CheckmarkContainer>
      <CheckmarkCircle>
        <Checkmark />
      </CheckmarkCircle>
      {locationState.desc === 'Your Donation has been added successfully!' ? (
        <Description>{locationState.desc}</Description>
      ) : (
        <Description>Payment Done!</Description>
      )}

      <HomeButton onClick={handleClick}>Go to Home</HomeButton>
    </CheckmarkContainer>
    // </Container>
  );
}

export default CheckmarkComponent;
