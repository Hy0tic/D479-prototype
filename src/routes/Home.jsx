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
Taniti, a picturesque island nestled in the heart of the Pacific, offers a unique blend of breathtaking natural landscapes and rich cultural heritage. This tropical paradise, known for its diverse ecosystems ranging from pristine beaches to lush rainforests and an active volcano, provides a plethora of activities for every type of traveler. When it comes to practicalities, visitors will find the island accommodating to their needs. The electrical outlets in Taniti conform to the 120-volt standard, the same as in the United States, ensuring that travelers from the US can use their electronic devices without needing an adapter. In case of emergencies, Taniti is well-prepared with a centrally located hospital equipped with multilingual staff, along with several clinics scattered across the island, ensuring health and safety concerns are promptly addressed. Moreover, currency exchange is conveniently accessible for tourists, with facilities available at the airport, banks, and most hotels. The island uses the U.S. dollar as its primary currency, but euros and yen are also widely accepted, making transactions smooth for international visitors. Taniti's infrastructure ensures that while you are immersed in the island's stunning natural beauty and engaging in various outdoor adventures or cultural explorations, your practical needs and safety are well taken care of.
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