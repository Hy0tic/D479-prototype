import React, { useState } from 'react';
import styled from 'styled-components';

// Sample products data with an image URL for each product
const products = [
  {
    id: 1,
    name: 'Elegant Hotel Room',
    price: 100,
    type: 'hotel',
    description: 'A cozy and elegant hotel room in the city center.',
    image: 'https://wallpapercave.com/wp/wp3598835.jpg',
  },
  {
    id: 2,
    name: 'Sea View Condo',
    price: 300,
    type: 'condo',
    description: 'Spacious condo with a beautiful sea view.',
    image: 'https://wallpapercave.com/wp/wp3598835.jpg',
  },
  {
    id: 3,
    name: 'Luxury Resort Suite',
    price: 500,
    type: 'resort',
    description: 'A luxury suite with all amenities included.',
    image: 'https://wallpapercave.com/wp/wp3598835.jpg',
  },
  // Add more products as needed
];

const FilterContainer = styled.div`
  background-color: gray;
  border-radius: 15px;
  padding: 20px;
  margin: 20px auto;
  max-width: 1600px;
  display: flex;
  flex-direction: row;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ddd;
  margin: 10px 0;
  padding: 10px;
  border-radius: 15px;
  background-color: gray;
`;

const ProductsDisplay = styled.div`
  max-height: 900px;
  overflow-y: auto;
  width: 1500px;
`;

const PriceRangeFilter = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [type, setType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product =>
    product.price >= minPrice &&
    product.price <= maxPrice &&
    (type === 'All' || product.type === type) &&
    (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
     product.type.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div>
      <FilterContainer>
        <div style={{ marginBottom: '20px' }}>
          <label>Search: </label>
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search products..."
          />
        </div>

        <div style={{ marginBottom: '20px', width: '900px' }}>
          <label>Minimum Price: </label>
          <input
            type="number"
            value={minPrice}
            onChange={e => setMinPrice(Number(e.target.value))}
          />
          <label style={{}}>Maximum Price: </label>
          <input
            type="number"
            value={maxPrice}
            onChange={e => setMaxPrice(Number(e.target.value))}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Type: </label>
          <select value={type} onChange={e => setType(e.target.value)}>
            <option value="All">All</option>
            <option value="hotel">Hotels</option>
            <option value="condo">Condos</option>
            <option value="resort">Resorts</option>
          </select>
        </div>
      </FilterContainer>

      <ProductsDisplay>
        <h2>Filtered Products</h2>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductContainer key={product.id}>
              <img src={product.image} alt={product.name} style={{ width: '150px', marginRight: '20px', borderRadius: '15px' }} />
              <div>
                <h3>{product.name} - ${product.price}</h3>
                <p><strong>Type:</strong> {product.type}</p>
                <p><strong>Description:</strong> {product.description}</p>
              </div>
            </ProductContainer>
          ))
        ) : (
          <p>No products match your criteria.</p>
        )}
      </ProductsDisplay>
    </div>
  );
};

export default PriceRangeFilter;
