import { useState, useEffect } from "react";

export const useLocalStorage = (itemName, initialValue) => {
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    const getLS = localStorage.getItem(itemName);
    let parsedItem;

    if (!getLS) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(getLS);
    }

    setItem(parsedItem);
  }, []);

  const saveItem = (newItem) => {
    const newItemLS = JSON.stringify(newItem);
    localStorage.setItem(itemName, newItemLS);
    setItem(newItem);
  };

  return {
    item,
    saveItem,
  };
};
