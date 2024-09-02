import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../services/api';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      const data = await fetchOrders();
      setOrders(data);
    };

    loadOrders();
  }, []);

  return (
    <div>
      <h1>Order History</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <p>Order ID: {order.id}</p>
            <p>Status: {order.status}</p>
            <p>Total: ${order.total}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
