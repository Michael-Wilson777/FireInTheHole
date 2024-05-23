import { PEPPERS } from '../data/PEPPERS.js'

export const selectAllProducts = () => {
  return PEPPERS;
};

export const selectProductById = (id) => {
  return PEPPERS.find((pepper) => pepper.id === parseInt(id));
};

export const selectFeaturedProduct = () => {
  return PEPPERS.find((pepper) => pepper.featured);
};

//selectProductByScoville goes here when search bar is set up with form alaso need a to find products with seeds, dried, and powder