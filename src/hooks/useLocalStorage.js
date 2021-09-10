import { useState } from 'react';

function useLocalStorage(id, collection) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const data = localStorage.getItem(collection);
      return JSON.parse(data)[id];
    } catch (err) {
      return null;
    }
  });

  const setLocalStorage = (value) => {
    try {
      let data = {};
      const storageData = localStorage.getItem(collection);
      if (storageData) {
        data = JSON.parse(storageData);
      }
      data[id] = value;
      const result = JSON.stringify(data);
      localStorage.setItem(collection, result);
      setStoredValue(value);
    } catch (err) {
      setStoredValue(null);
    }
  };
  return [storedValue, setLocalStorage];
}

export default useLocalStorage;
