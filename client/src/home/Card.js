import React, { useState } from "react";
import styled from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Card(props) {
  const Card = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: rgba(250, 236, 214, 0.5);
    margin: 0px 15px;
    box-shadow: 0 13px 0 -5px hsla(240, 30.1%, 28%, 0.55);
  `;
  const Box = styled.div`
    width: 15vw;
    height:180px;
    border-radius: 40px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    background-color: rgba(242, 222, 186, 0.8);
  `;

  const Image = styled.img`
    height: 100px;
    width: 15vw;
    object-fit: cover;
    border-radius: 30px;
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
    transition: transform 0.25s;
    margin-right: ${(props) => props.marginRight};
  `;

  const Name = styled.h4`
    font-size: 24px;
    font-family: "Ubuntu",sans-serif;
    font-weight: bold;
    text-align: center;
    letter-spacing: 1.45px;
    margin: 0;
  `;
  const NameTitle = styled.h4`
    font-weight: lighter;
    font-size: 12px;
    font-family: "Ubuntu", sans-serif;
    text-align: justify;
    letter-spacing: 1.45px;
    margin: 0;
    margin-top:2px;
  `;
  const Button = styled(Link)`
    margin-top: 10px;
    letter-spacing: 1.8;
    text-decoration: none;
    font-family: "Urbanist", sans-serif;
    border: 0 solid;
    color: whitesmoke;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
    outline: 1px solid;
    outline-color: rgba(255, 255, 255, 0.5);
    outline-offset: 0px;
    padding: 5.45px 10.45px;
    font-weight: bolder;
    text-shadow: none;

    background-color: darkred;
    border-radius: 20PX;
    font-size: 14px;
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
    &:hover {
      cursor: pointer;
      border: 1px solid;
      background-color: limegreen;
      box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
        0 0 20px rgba(255, 255, 255, 0.2);
      outline-color: rgba(255, 255, 255, 0);
      outline-offset: 15px;
      text-shadow: 0.3px 0.3px 0.6px #429888;
    }
  `;
  const AmountRaised = styled.h4`
    font-size: 12px;
    font-family: "Urbanist", sans-serif;
    justify-content: left;
    color: ${(props) => props.background};
    letter-spacing: 1.2px;
    margin: 4px 0;
  `;

  const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 2px;
    overflow: visible;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
  `;

  const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    transform: translate(-50%, -50%);
    background-color: whitesmoke;
    padding: 10px;
    width: 50vw;
    // height: 20vh;
    overflow: visible;
    border-radius: 20px;
    align-items: flex-start;
    z-index: 11;
  `;

  const ModelTopRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  `;
  const ModelColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `;
  const DescriptionBottom = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  `;
  const Navbar = styled.div`
    margin-top: 20px;
    display: flex;
    border-radius: 20px;
    width: 95%;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    background-color: darkred;
    margin-bottom: 15px;
    color: white;
    font-family: "Uranist", sans-serif;
  `;

  const NavbarItem = styled.div`
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

  const [modalOpen, setModalOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState("story");
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = (event) => {
    event.stopPropagation();
    setModalOpen(false);
  };
  function handleSelect(name) {
    setSelected(name);
  }

  return (
    <Card>
      {modalOpen && (
        <ModalOverlay>
          <ModalContent>
            {
              <ModelTopRow>
                <Image marginRight="20px" src={props.img} />
                <ModelColumn>
                  <Name>{props.name}</Name>
                  <NameTitle>{props.title}</NameTitle>
                  <AmountRaised background="darkred">
                    NRs. 2,00,000 Raised
                  </AmountRaised>
                  <ProgressBar
                    completed={38}
                    maxCompleted={100}
                    height={14}
                    width={250}
                  />
                  <DescriptionBottom>
                    <AmountRaised background="green">
                      Goal : NRs. 5,000,000
                    </AmountRaised>
                    <Button
                      to="/individualDonar"
                      state={{
                        name: props.name,
                        title: props.title,
                        img: props.img,
                        description: props.description,
                        progress: props.progress,
                      }}
                    >
                      DONATE
                    </Button>
                  </DescriptionBottom>
                </ModelColumn>
                <button
                  onClick={closeModal}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  style={{
                    transform: hover ? "scale(1.2)" : "scale(1)",
                    background: "none",
                    border: "none",
                    fontSize: "20px",
                    fontWeight: hover ? "bold" : "normal",
                    color: hover ? "darkred" : "black",
                    cursor: "pointer",
                  }}
                >
                  <RxCross1 />
                </button>
              </ModelTopRow>
            }
            {
              <Navbar>
                <NavbarItem
                  selected={selected === "story"}
                  onClick={() => handleSelect("story")}
                >
                  Story
                </NavbarItem>
                <NavbarItem
                  selected={selected === "testimonials"}
                  onClick={() => handleSelect("testimonials")}
                >
                  Testimonials
                </NavbarItem>
                <NavbarItem
                  selected={selected === "updates"}
                  onClick={() => handleSelect("updates")}
                >
                  Updates
                </NavbarItem>
              </Navbar>
            }
          </ModalContent>
        </ModalOverlay>
      )}
      <Box>
        
        <Image src={props.img} onClick={openModal} />
        <Button
          to="/individualDonar"
          state={{
            name: props.name,
            title: props.title,
            img: props.img,
            description: props.description,
            progress: props.progress,
          }}
        >
          DONATE
        </Button>
        <NameTitle>{props.title}</NameTitle>
        <AmountRaised background="darkred">NRs. 2,00,000 Raised</AmountRaised>
        <ProgressBar
          completed={20}
          customLabel=" "
          maxCompleted={100}
          
          height={8}
          width={200}
          
        />
       
        <AmountRaised background="green">Goal : NRs. 5,000,000</AmountRaised>
      </Box>
    </Card>
  );
}
export default Card;
