const kitchenService = require('../services/kitchenService');

describe('Kitchen Service', () => {
  it('should create a new kitchen', async () => {
    const kitchenData = { name: 'Test Kitchen', location: 'Test Location' };
    const kitchen = await kitchenService.createKitchen(kitchenData);
    expect(kitchen).toHaveProperty('id');
    expect(kitchen.name).toEqual('Test Kitchen');
  });
});
