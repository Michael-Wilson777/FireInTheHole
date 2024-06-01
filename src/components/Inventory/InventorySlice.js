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
  return INVENTORY.filter((item) => {
    item.Scoville <= 50000 ? item : "There are no mild items in the inventory";
  });
};
