import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

const businessObject = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}
const businessArray = [businessObject,businessObject,businessObject,businessObject,businessObject,businessObject];
function App() {
  return (
    <div className="App">
      <h1>Ravenous</h1>
      <header className="App-header">
      <SearchBar />
      </header>
      <BusinessList businessArray={businessArray}/>
    </div>
  );
}

export default App;
