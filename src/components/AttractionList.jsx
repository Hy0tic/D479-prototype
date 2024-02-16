import React, { useState } from 'react';
import styled from 'styled-components';


// Styled components
const Container = styled.div`
  padding: 20px;
  margin: 20px auto;
  max-width: 1500px;
  border-radius: 15px;
`;


const AttractionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ddd;
  margin: 10px 0;
  padding: 10px;
  border-radius: 15px;
  background-color: gray;
  width: 1500px;
`;


const AttractionsDisplay = styled.div`
  max-height: 600px;
`;

const FilterContainer = styled.div`
  background-color: gray;
  border-radius: 15px;
  padding: 20px;
  margin: 20px auto;
  max-width: 1600px;
  display: flex;
  flex-direction: row;
`;

// Attractions data
const attractions = [
  {
    id: 1,
    name: 'City Museum',
    description: 'Explore the history of the city in this comprehensive museum.',
    image: 'https://th.bing.com/th/id/OIP.2WN3O7Kywr-mKko2N6_IygHaE9?rs=1&pid=ImgDetMain',
  },
  {
    id: 2,
    name: 'Central Park',
    description: 'A vast green space in the heart of the city with walking paths and a lake.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Rymill_park_path.jpg',
  },
  {
    id: 3,
    name: 'Skyline Viewpoint',
    description: 'Get the best views of the city skyline from this popular viewpoint.',
    image: 'https://th.bing.com/th/id/OIP.w8mXcHLMdKowVan7rdzAOQAAAA?rs=1&pid=ImgDetMain',
  },
  // Add more attractions as needed
];

const AttractionList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAttractions = attractions.filter(attraction =>
    attraction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    attraction.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <FilterContainer>
        <div style={{ marginBottom: '20px' }}>
          <label>Search Attractions: </label>
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search attractions..."
          />
        </div>
      </FilterContainer>

      <AttractionsDisplay>
        <h2>Attractions</h2>
        {filteredAttractions.length > 0 ? (
          filteredAttractions.map(attraction => (
            <AttractionContainer key={attraction.id}>
              <img src={attraction.image} alt={attraction.name} style={{ width: '150px', marginRight: '20px', borderRadius: '10px' }} />
              <div>
                <h3>{attraction.name}</h3>
                <p>{attraction.description}</p>
              </div>
            </AttractionContainer>
          ))
        ) : (
          <p>No attractions match your search.</p>
        )}
      </AttractionsDisplay>
    </Container>
  );
};

export default AttractionList;
