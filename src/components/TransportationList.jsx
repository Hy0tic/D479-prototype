import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`

  padding: 20px;
  margin: 20px auto;
  max-width: 1500px; /* Container max-width adjusted to match item width */
  border-radius: 15px;
`;

const TransportationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ddd;
  margin: 10px 0;
  padding: 10px;
  border-radius: 15px;
  background-color: gray;
  width: 1500px; /* Set width of each item to 1500px */
  max-width: 100%; /* Ensure it doesn't exceed the viewport width */
`;

const TransportationDisplay = styled.div`

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

// Sample data for transportation methods
const transportationMethods = [
  {
    id: 1,
    name: 'City Bus Tour',
    description: 'An all-day bus pass to explore the city at your own pace.',
    image: 'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/48byXia/videoblocks-big-bus-tours-in-new-york-downtown-theater-district-4k_hyw7_be6a_thumbnail-1080_01.png',
  },
  {
    id: 2,
    name: 'Bicycle Rental',
    description: 'Rent a bike and see the city from a new perspective.',
    image: 'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/48byXia/videoblocks-big-bus-tours-in-new-york-downtown-theater-district-4k_hyw7_be6a_thumbnail-1080_01.png',
  },
  {
    id: 3,
    name: 'Ferry Ride',
    description: 'Enjoy a scenic ferry ride across the bay.',
    image: 'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/48byXia/videoblocks-big-bus-tours-in-new-york-downtown-theater-district-4k_hyw7_be6a_thumbnail-1080_01.png',
  },
  // Add more transportation methods as needed
];

const TransportationList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTransportation = transportationMethods.filter(method =>
    method.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    method.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <FilterContainer>
      <div style={{ marginBottom: '20px' }}>
        <label>Search Transportation: </label>
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search transportation methods..."
        />
      </div>
      </FilterContainer>
      <TransportationDisplay>
        <h2>Transportation Methods</h2>
        {filteredTransportation.length > 0 ? (
          filteredTransportation.map(method => (
            <TransportationContainer key={method.id}>
              <img src={method.image} alt={method.name} style={{ width: '150px', marginRight: '20px', borderRadius: '10px' }} />
              <div>
                <h3>{method.name}</h3>
                <p>{method.description}</p>
              </div>
            </TransportationContainer>
          ))
        ) : (
          <p>No transportation methods match your search.</p>
        )}
      </TransportationDisplay>
    </Container>
  );
};

export default TransportationList;
