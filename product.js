let products = []; 
let id = 1; 

function resetProducts() {
  products = []; 
  id = 1;
}

function addProduct(name, price) {
  
  if (!name || price === undefined) {
    throw new Error('Missing name or price'); 
  }
  products.push({ id, name, price }); 
  id++; 
}

function removeProduct(productId) {
  const productIndex = products.findIndex(p => p.id === productId); 
  if (productIndex === -1) {
    throw new Error('Product not found');
  }
  products.splice(productIndex, 1); 
}

function getProducts() {
  return products; 
}

function getProduct(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) {
    throw new Error('Product not found');
  }
  return product; 
}

function updateProduct(productId, name, price) {
  const product = products.find(p => p.id === productId);
  if (!product) {
    throw new Error('Product not found');
  }
  
  if (name) product.name = name;
  if (price) product.price = price;
}

module.exports = { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct };
