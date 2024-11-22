import { useState, useEffect } from 'react';
import { getAllStarships } from './Services/sw-api';
import './style.css';
import StarshipCard from './StarShipCard';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const starshipsData = await getAllStarships();
        setStarships(starshipsData);
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Star Wars Starships</h1>
      <div className="starships-container">
        {starships.map((starship, index) => (
          <StarshipCard key={index} starship={starship} />
        ))}
      </div>
    </div>
  );
}

export default App;
