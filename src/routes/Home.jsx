import { Navbar } from "../components/Navbar";
import beach from '../assets/beach.jpg'
import styled from 'styled-components';

export default function Home() {
    return (
      <>
        <Navbar/>


        <StyledGrayBox>
          <h1 style={{ color: 'black', textAlign: 'center' }}>
            Taniti
          </h1>


          <StyledContainer>
            <p style={{
              display: 'inline-block', 
              verticalAlign: 'top', 
              maxWidth: '60%',
              color: 'black',
              padding: '35px'
            }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Varius quam quisque id diam vel quam elementum pulvinar. In egestas erat imperdiet sed euismod nisi. Facilisis magna etiam tempor orci eu lobortis elementum nibh. 
                Euismod lacinia at quis risus sed. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Tempus egestas sed sed risus pretium quam vulputate dignissim. 
                Varius sit amet mattis vulputate enim nulla aliquet. Tellus elementum sagittis vitae et leo duis ut. Nullam vehicula ipsum a arcu cursus. 
                Fringilla urna porttitor rhoncus dolor purus non enim. Posuere urna nec tincidunt praesent semper feugiat nibh sed. 
                Gravida arcu ac tortor dignissim convallis aenean et tortor at. Magna etiam tempor orci eu lobortis elementum nibh tellus. 
                Non enim praesent elementum facilisis leo vel. Elementum facilisis leo vel fringilla. Mauris rhoncus aenean vel elit scelerisque. 
                Aliquet nec ullamcorper sit amet risus nullam eget felis.
              </p>

              <img src={beach} height={500} width={1000} alt="beach"
                style={{
                display: 'inline-block', 
                verticalAlign: 'top', 
                marginLeft: '20px', 
                width: '30%',
                borderRadius: '16px'
              }} />
          </StyledContainer>
        </StyledGrayBox>

      </>
    );
  }

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledGrayBox = styled.div`
  background-color: gray;
  border-radius: 15px;
  padding: 20px;
  margin: 60px;
`