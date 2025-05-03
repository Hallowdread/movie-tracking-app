import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  //? State to get items from local storage
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  //? Effect to add to local storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
