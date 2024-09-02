import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchKitchenById } from '../services/api';

const KitchenDetail = () => {
  const { id } = useParams();
  const [kitchen, setKitchen] = useState(null);

  useEffect(() => {
    const loadKitchen = async () => {
      const data = await fetchKitchenById(id);
      setKitchen(data);
    };

    loadKitchen();
  }, [id]);

  if (!kitchen) return <div>Loading...</div>;

  return (
    <div>
      <h1>{kitchen.name}</h1>
      <p>{kitchen.description}</p>
      <h2>Menu</h2>
      <ul>
        {kitchen.menu.map(dish => (
          <li key={dish.id}>
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <p>Price: ${dish.price}</p>
          </li>
        ))}
      </ul>
      <h2>Reviews</h2>
      <ul>
        {kitchen.reviews.map(review => (
          <li key={review.id}>
            <p>{review.text}</p>
            <p>Rating: {review.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KitchenDetail;
