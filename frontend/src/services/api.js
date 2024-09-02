export const fetchKitchens = async () => {
    const response = await fetch('/api/kitchens');
    return response.json();
  };
  
  export const fetchKitchenById = async (id) => {
    const response = await fetch(`/api/kitchen/${id}`);
    return response.json();
  };
  
  export const fetchOrders = async () => {
    const response = await fetch('/api/orders');
    return response.json();
  };
  
  // Add other API functions as needed
  