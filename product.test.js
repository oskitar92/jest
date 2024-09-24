const { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct } = require('./product');

beforeEach(() => {
  resetProducts();
});

test('should add a product', () => {
    addProduct('Apple', 1.5); 
    const products = getProducts(); 
    expect(products[0].name).toBe('Apple'); 
  });
  
  test('should throw error if name is missing', () => {
    expect(() => addProduct(undefined, 1.5)).toThrow(); 
  });
  