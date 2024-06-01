import { INVENTORY } from "../../data/Inventory";

export const selectAllInventory = () => {
  return INVENTORY;
};

export const selectInventoryById = (id) => {
  return INVENTORY.find((inventoryItem) => inventoryItem.id === parseInt(id));
};

export const selectFeaturedItem = () => {
  return INVENTORY.find((item) => item.featured);
};

export const selectItemByMildHeat = () => {
  return INVENTORY.filter((item) => item.Scoville <= 50000);
};

export const selectItemByMediumHeat = () => {
  return INVENTORY.filter((item) => item.Scoville > 50000 && item.Scoville < 500000);
};

export const selectItemByHotHeat = () => {
  return INVENTORY.filter((item) => item.Scoville > 500000 && item.Scoville < 1500000)
};
