import React, { useEffect, useState } from 'react';
import { fetchKitchens } from '../services/api';

const Home = () => {
  const [kitchens, setKitchens] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loadKitchens = async () => {
      const data = await fetchKitchens();
      setKitchens(data);
    };

    loadKitchens();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredKitchens = kitchens.filter(kitchen =>
    kitchen.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Welcome to FoodieHub</h1>
      <input
        type="text"
        placeholder="Search kitchens..."
        value={search}
        onChange={handleSearch}
      />
      <div>
        {filteredKitchens.map(kitchen => (
          <div key={kitchen.id}>
            <h2>{kitchen.name}</h2>
            <p>{kitchen.description}</p>
            <img src={kitchen.image} alt={kitchen.name} />
            <p>Rating: {kitchen.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
