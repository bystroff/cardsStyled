import './App.css';
import styled from "styled-components"
import { CardStyled } from './components/Card.styled';
import { CardImage } from './components/CardImage.styled';
import { CardText } from './components/CardText.styled';
import { CardButtons, StyledBtn } from './components/CardButtons.styled';


function App() {
  return (
    <div className="App">
      <CardsSide>
        <CardStyled>
          <CardImage />
          <CardText>
            <h3>HeadLine</h3>
            <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. 
              Sit molestie ornare in venen.</p>
          </CardText>
          <CardButtons>
            <StyledBtn primary as={"a"} href={"#"}>See more</StyledBtn>
            <StyledBtn outlined>Save</StyledBtn>
          </CardButtons>
        </CardStyled>
      </CardsSide>
    </div>
  );
}

export default App;

const CardsSide = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  button {
    cursor: pointer;
  }
`