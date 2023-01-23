import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaTimes} from 'react-icons/fa';
const CheckmarkCircle = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: red; // change the background color to red
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Checkmark = styled(FaTimes)`
  width: 80px;
  height: 80px;
  color: white;
  animation: failure 1s ease-in-out; // add new keyframes animation for failure

  @keyframes failure {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(45deg);
    }
    40% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Description = styled.p`
  font-size: 24px;
  margin-top: 30px;
  text-align: center;
  letter-spacing: 0.8px;
`;
const CheckmarkContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: 'Urbanist', sans-serif;
  border-radius:50%;;
  
`;
function FailureComponent() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
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
    background-color: darkred;
  }
`;
const CrossContainer = styled.div`
  border-radius: 50%;
  width: 130px;
  height: 130px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: cross 1s ease-in-out;
  @keyframes cross {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(45deg);
    }
    40% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;


  return (
    <CheckmarkContainer>
      <CrossContainer>
        <Checkmark/>
      </CrossContainer>
      <Description>Sorry, the operation failed.</Description>{' '}
      {/* Change the description to indicate failure */}
      <HomeButton onClick={handleClick}>Go Back</HomeButton>{' '}
      {/* Change the text on the button */}
    </CheckmarkContainer>
  );
}
export default FailureComponent
